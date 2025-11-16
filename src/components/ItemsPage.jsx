import React, { useMemo, useState, useEffect } from 'react';
import { menuData } from '../data/menuData';
import { formatSubcategoryName } from '../utils/helpers';
import SearchBar from './SearchBar';
import ItemCard from './ItemCard';

const ItemsPage = ({ category, subcategory, onNavigateBack, onOpenModal, searchQuery, onSearchChange }) => {
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };
    const items = useMemo(() => {
        let itemsList = [];
        
        if (category === 'cigarettes') {
            itemsList = menuData.cigarettes[subcategory] || [];
        } else if (category === 'drinks') {
            itemsList = menuData.drinks[subcategory] || [];
        } else if (category === 'food') {
            itemsList = menuData.food[subcategory] || [];
        }

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            itemsList = itemsList.filter(item =>
                item.name.toLowerCase().includes(query) ||
                (item.category && item.category.toLowerCase().includes(query))
            );
        }

        return itemsList;
    }, [category, subcategory, searchQuery]);

    // Group items by veg/non-veg/egg for food, or by category for drinks/cigarettes/starters/roti
    const groupedItems = useMemo(() => {
        if (category === 'food' && (subcategory === 'starters' || subcategory === 'roti')) {
            // Group starters and roti by category (Sandwich, Soup, Egg, Chicken, Roti, Naan, Paratha, etc.)
            const grouped = {};
            items.forEach(item => {
                const cat = item.category || 'Other';
                if (!grouped[cat]) {
                    grouped[cat] = [];
                }
                grouped[cat].push(item);
            });
            return grouped;
        } else if (category === 'food') {
            const nonVeg = items.filter(item => item.type === 'non-veg');
            const veg = items.filter(item => item.type === 'veg');
            const egg = items.filter(item => item.type === 'egg');
            return { nonVeg, veg, egg };
        } else if (category === 'drinks' || category === 'cigarettes') {
            // Group drinks/cigarettes by category
            const grouped = {};
            items.forEach(item => {
                const cat = item.category || 'Other';
                if (!grouped[cat]) {
                    grouped[cat] = [];
                }
                grouped[cat].push(item);
            });
            return grouped;
        }
        return null;
    }, [items, subcategory, category]);

    // Initialize expanded sections for drinks/cigarettes/starters/roti categories
    useEffect(() => {
        if ((category === 'drinks' || category === 'cigarettes' || (category === 'food' && (subcategory === 'starters' || subcategory === 'roti'))) && groupedItems) {
            const categories = Object.keys(groupedItems);
            setExpandedSections(prev => {
                const newExpanded = { ...prev };
                let hasChanges = false;
                categories.forEach(cat => {
                    if (newExpanded[cat] === undefined) {
                        newExpanded[cat] = true;
                        hasChanges = true;
                    }
                });
                return hasChanges ? newExpanded : prev;
            });
        } else if (category === 'food') {
            setExpandedSections({
                nonVeg: true,
                veg: true,
                egg: true
            });
        }
    }, [category, subcategory, groupedItems]);

    const displayName = formatSubcategoryName(subcategory);
    const isFoodCategory = category === 'food';
    const isDrinksCategory = category === 'drinks';
    const isCigarettesCategory = category === 'cigarettes';

    // Calculate available pricing fields for drinks header
    const headerPricingFields = useMemo(() => {
        if (!isDrinksCategory || !items || items.length === 0) return [];
        
        const fieldOrder = ['ml30', 'ml60', 'ml90', 'nip', 'pint', 'full', 'bottle', 'tower', 'port', 'price'];
        const availableFields = new Set();
        
        // Check all items for available fields
        items.forEach(item => {
            if (item.ml30 !== undefined) availableFields.add('ml30');
            if (item.ml60 !== undefined) availableFields.add('ml60');
            if (item.ml90 !== undefined) availableFields.add('ml90');
            if (item.nip !== undefined) availableFields.add('nip');
            if (item.pint !== undefined) availableFields.add('pint');
            if (item.full !== undefined) availableFields.add('full');
            if (item.bottle !== undefined) availableFields.add('bottle');
            if (item.tower !== undefined) availableFields.add('tower');
            if (item.port !== undefined) availableFields.add('port');
            if (item.price !== undefined) availableFields.add('price');
        });
        
        return fieldOrder.filter(field => availableFields.has(field));
    }, [isDrinksCategory, items]);

    const getFieldLabel = (field) => {
        const labels = {
            ml30: '30ml',
            ml60: '60ml',
            ml90: '90ml',
            nip: 'Nip',
            pint: 'Pint',
            full: 'Full',
            bottle: 'Bottle',
            tower: 'Tower',
            port: 'Port',
            price: 'Price'
        };
        return labels[field] || field;
    };

    return (
        <div className="screen active">
            <div className="header">
                <button className="back-btn" onClick={onNavigateBack}>
                    <span className="back-arrow">←</span>
                </button>
                    <h2 className={`header-title ${isFoodCategory || isDrinksCategory || isCigarettesCategory ? 'tandoori-header' : ''}`}>
                        {displayName}
                    </h2>
                <div className="spacer"></div>
            </div>

            <SearchBar
                value={searchQuery}
                onChange={onSearchChange}
                placeholder="Search..."
            />

            {(isFoodCategory || isDrinksCategory || isCigarettesCategory) && groupedItems ? (
                <div className="tandoori-sections">
                    {isFoodCategory && (subcategory === 'starters' || subcategory === 'roti') ? (
                        <>
                            {/* Category-based sections for starters and roti */}
                            {Object.keys(groupedItems).map((cat) => (
                                <div key={cat} className="tandoori-section">
                                    <div className="section-header" onClick={() => toggleSection(cat)}>
                                        <h3 className="section-title">{cat}</h3>
                                        <span className={`dropdown-arrow ${expandedSections[cat] ? 'expanded' : ''}`}>▼</span>
                                    </div>
                                    {expandedSections[cat] && (
                                        <div className="tandoori-list">
                                            {groupedItems[cat].map((item, index) => (
                                                <div 
                                                    key={`${cat}-${category}-${subcategory}-${index}`}
                                                    className="tandoori-list-item"
                                                >
                                                    <div className="list-item-content">
                                                        <div className="list-item-name">{item.name}</div>
                                                        <div className="list-item-pricing">
                                                            {item.half !== undefined ? (
                                                                <span className="list-price">₹{item.half} / ₹{item.full}</span>
                                                            ) : item.price !== undefined ? (
                                                                <span className="list-price">₹{item.price}</span>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            {Object.keys(groupedItems).length === 0 && (
                                <div className="empty-state">
                                    <div className="empty-state-text">No items found</div>
                                </div>
                            )}
                        </>
                    ) : isFoodCategory ? (
                        <>
                            {/* Non-Vegetarian Section */}
                            {groupedItems.nonVeg && groupedItems.nonVeg.length > 0 && (
                                <div className="tandoori-section">
                                    <div className="section-header" onClick={() => toggleSection('nonVeg')}>
                                        <h3 className="section-title">Non-Vegetarian</h3>
                                        <span className={`dropdown-arrow ${expandedSections.nonVeg ? 'expanded' : ''}`}>▼</span>
                                    </div>
                                    {expandedSections.nonVeg && (
                                        <div className="tandoori-list">
                                            {groupedItems.nonVeg.map((item, index) => (
                                                <div 
                                                    key={`nonveg-${category}-${subcategory}-${index}`}
                                                    className="tandoori-list-item"
                                                >
                                                    <div className="list-item-content">
                                                        <div className="list-item-name">{item.name}</div>
                                                        <div className="list-item-pricing">
                                                            {item.half !== undefined ? (
                                                                <span className="list-price">₹{item.half} / ₹{item.full}</span>
                                                            ) : item.price !== undefined ? (
                                                                <span className="list-price">₹{item.price}</span>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Egg Section (if applicable) */}
                            {groupedItems.egg && groupedItems.egg.length > 0 && (
                                <div className="tandoori-section">
                                    <div className="section-header" onClick={() => toggleSection('egg')}>
                                        <h3 className="section-title">Egg</h3>
                                        <span className={`dropdown-arrow ${expandedSections.egg ? 'expanded' : ''}`}>▼</span>
                                    </div>
                                    {expandedSections.egg && (
                                        <div className="tandoori-list">
                                            {groupedItems.egg.map((item, index) => (
                                                <div 
                                                    key={`egg-${category}-${subcategory}-${index}`}
                                                    className="tandoori-list-item"
                                                >
                                                    <div className="list-item-content">
                                                        <div className="list-item-name">{item.name}</div>
                                                        <div className="list-item-pricing">
                                                            {item.half !== undefined ? (
                                                                <span className="list-price">₹{item.half} / ₹{item.full}</span>
                                                            ) : item.price !== undefined ? (
                                                                <span className="list-price">₹{item.price}</span>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Vegetarian Section */}
                            {groupedItems.veg.length > 0 && (
                                <div className="tandoori-section">
                                    <div className="section-header" onClick={() => toggleSection('veg')}>
                                        <h3 className="section-title">Vegetarian</h3>
                                        <span className={`dropdown-arrow ${expandedSections.veg ? 'expanded' : ''}`}>▼</span>
                                    </div>
                                    {expandedSections.veg && (
                                        <div className="tandoori-list">
                                            {groupedItems.veg.map((item, index) => (
                                                <div 
                                                    key={`veg-${category}-${subcategory}-${index}`}
                                                    className="tandoori-list-item"
                                                >
                                                    <div className="list-item-content">
                                                        <div className="list-item-name">{item.name}</div>
                                                        <div className="list-item-pricing">
                                                            {item.half !== undefined ? (
                                                                <span className="list-price">₹{item.half} / ₹{item.full}</span>
                                                            ) : item.price !== undefined ? (
                                                                <span className="list-price">₹{item.price}</span>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {groupedItems.nonVeg.length === 0 && groupedItems.veg.length === 0 && (!groupedItems.egg || groupedItems.egg.length === 0) && (
                                <div className="empty-state">
                                    <div className="empty-state-text">No items found</div>
                                </div>
                            )}
                        </>
                    ) : isDrinksCategory ? (
                        <>
                            {Object.keys(groupedItems).map((cat) => {
                                // Get all available pricing fields from items in this category
                                // Define the preferred order for pricing fields
                                const fieldOrder = ['ml30', 'ml60', 'ml90', 'nip', 'pint', 'full', 'bottle', 'tower', 'port', 'price'];
                                const availableFields = new Set();
                                
                                groupedItems[cat].forEach(item => {
                                    if (item.ml30 !== undefined) availableFields.add('ml30');
                                    if (item.ml60 !== undefined) availableFields.add('ml60');
                                    if (item.ml90 !== undefined) availableFields.add('ml90');
                                    if (item.nip !== undefined) availableFields.add('nip');
                                    if (item.pint !== undefined) availableFields.add('pint');
                                    if (item.full !== undefined) availableFields.add('full');
                                    if (item.bottle !== undefined) availableFields.add('bottle');
                                    if (item.tower !== undefined) availableFields.add('tower');
                                    if (item.port !== undefined) availableFields.add('port');
                                    if (item.price !== undefined) availableFields.add('price');
                                });
                                
                                // Sort fields according to preferred order
                                const pricingFields = fieldOrder.filter(field => availableFields.has(field));

                                const getFieldLabel = (field) => {
                                    const labels = {
                                        ml30: '30ml',
                                        ml60: '60ml',
                                        ml90: '90ml',
                                        nip: 'Nip',
                                        pint: 'Pint',
                                        full: 'Full',
                                        bottle: 'Bottle',
                                        tower: 'Tower',
                                        port: 'Port',
                                        price: 'Price'
                                    };
                                    return labels[field] || field;
                                };

                                const displayFields = pricingFields;

                                return (
                                    <div key={cat} className="tandoori-section">
                                        <div className="section-header" onClick={() => toggleSection(cat)}>
                                            <h3 className="section-title">{cat}</h3>
                                            <span className={`dropdown-arrow ${expandedSections[cat] ? 'expanded' : ''}`}>▼</span>
                                        </div>
                                        {expandedSections[cat] && (
                                            <div className="tandoori-list">
                                                {/* Pricing Headers */}
                                                {displayFields.length > 0 && (
                                                    <div className="drinks-list-header">
                                                        <div className="drinks-header-name"></div>
                                                        <div className="drinks-header-prices">
                                                            {displayFields.map(field => (
                                                                <div key={field} className="drinks-header-price">{getFieldLabel(field)}</div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                                {/* Items */}
                                                {groupedItems[cat].map((item, index) => {
                                                    const hasSmallLarge = item.small !== undefined && item.large !== undefined;
                                                    
                                                    return (
                                                        <div 
                                                            key={`${cat}-${category}-${subcategory}-${index}`}
                                                            className="tandoori-list-item"
                                                        >
                                                            <div className="list-item-content drinks-item-content">
                                                                <div className="list-item-name drinks-item-name">{item.name}</div>
                                                                <div className="list-item-pricing drinks-item-pricing">
                                                                    {hasSmallLarge ? (
                                                                        <div className="drinks-price-cell" style={{gridColumn: `1 / ${displayFields.length + 1}`}}>
                                                                            ₹{item.small} / ₹{item.large}
                                                                        </div>
                                                                    ) : (
                                                                        displayFields.map(field => (
                                                                            <div key={field} className="drinks-price-cell">
                                                                                {item[field] !== undefined ? `₹${item[field]}` : <span style={{color: '#999999'}}>-</span>}
                                                                            </div>
                                                                        ))
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                            {Object.keys(groupedItems).length === 0 && (
                                <div className="empty-state">
                                    <div className="empty-state-text">No items found</div>
                                </div>
                            )}
                        </>
                    ) : isCigarettesCategory ? (
                        <>
                            {Object.keys(groupedItems).map((cat) => {
                                // Get all available pricing fields from items in this category
                                // Define the preferred order for pricing fields
                                const fieldOrder = ['single', 'packet', 'carton', 'price'];
                                const availableFields = new Set();
                                
                                groupedItems[cat].forEach(item => {
                                    if (item.single !== undefined) availableFields.add('single');
                                    if (item.packet !== undefined) availableFields.add('packet');
                                    if (item.carton !== undefined) availableFields.add('carton');
                                    if (item.price !== undefined) availableFields.add('price');
                                });
                                
                                // Sort fields according to preferred order
                                const pricingFields = fieldOrder.filter(field => availableFields.has(field));

                                const getFieldLabel = (field) => {
                                    const labels = {
                                        single: 'Single',
                                        packet: 'Packet',
                                        carton: 'Carton',
                                        price: 'Price'
                                    };
                                    return labels[field] || field;
                                };

                                return (
                                    <div key={cat} className="tandoori-section">
                                        <div className="section-header" onClick={() => toggleSection(cat)}>
                                            <h3 className="section-title">{cat}</h3>
                                            <span className={`dropdown-arrow ${expandedSections[cat] ? 'expanded' : ''}`}>▼</span>
                                        </div>
                                        {expandedSections[cat] && (
                                            <div className="tandoori-list">
                                                {/* Pricing Headers */}
                                                {pricingFields.length > 0 && (
                                                    <div className="drinks-list-header">
                                                        <div className="drinks-header-name"></div>
                                                        <div className="drinks-header-prices">
                                                            {pricingFields.map(field => (
                                                                <div key={field} className="drinks-header-price">{getFieldLabel(field)}</div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                                {/* Items */}
                                                {groupedItems[cat].map((item, index) => (
                                                    <div 
                                                        key={`${cat}-${category}-${subcategory}-${index}`}
                                                        className="tandoori-list-item"
                                                    >
                                                        <div className="list-item-content drinks-item-content">
                                                            <div className="list-item-name drinks-item-name">{item.name}</div>
                                                            <div className="list-item-pricing drinks-item-pricing">
                                                                {pricingFields.map(field => (
                                                                    <div key={field} className="drinks-price-cell">
                                                                        {item[field] !== undefined ? `₹${item[field]}` : <span style={{color: '#999999'}}>-</span>}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                            {Object.keys(groupedItems).length === 0 && (
                                <div className="empty-state">
                                    <div className="empty-state-text">No items found</div>
                                </div>
                            )}
                        </>
                    ) : null}
                </div>
            ) : (
                <div className="items-grid">
                    {items.length === 0 ? (
                        <div className="empty-state">
                            <div className="empty-state-text">No items found</div>
                        </div>
                    ) : (
                        items.map((item, index) => (
                            <ItemCard
                                key={`${category}-${subcategory}-${index}`}
                                item={item}
                                category={category}
                                subcat={subcategory}
                                onClick={onOpenModal}
                            />
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default ItemsPage;

