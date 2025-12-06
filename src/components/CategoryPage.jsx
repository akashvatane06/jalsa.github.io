import React, { useMemo } from 'react';
import { menuData, categoryMeta } from '../data/menuData';
import { formatSubcategoryName } from '../utils/helpers';
import { getSubcategoryImage, getSubcategoryImageLocal } from '../utils/imageUtils';
import SearchBar from './SearchBar';
import ImageWithFallback from './ImageWithFallback';

const CategoryPage = ({ category, onNavigateBack, onNavigateToItems, searchQuery, onSearchChange }) => {
    const subcategories = useMemo(() => {
        const data = category === 'drinks' ? menuData.drinks : 
                     category === 'food' ? menuData.food : 
                     category === 'cigarettes' ? menuData.cigarettes : {};
        const query = searchQuery.toLowerCase();
        
        return Object.keys(data).filter(subcat => {
            if (!query) return true;
            const items = data[subcat];
            return items.some(item => 
                item.name.toLowerCase().includes(query) ||
                (item.category && item.category.toLowerCase().includes(query))
            );
        });
    }, [category, searchQuery]);

    const displayName = categoryMeta[category]?.name.charAt(0) + 
                       categoryMeta[category]?.name.slice(1).toLowerCase() + ' Menu';

    return (
        <div className="screen active">
            <div className="header">
                <button className="back-btn" onClick={onNavigateBack}>
                    <span className="back-arrow">←</span>
                </button>
                <h2 className="header-title">{displayName}</h2>
                <div className="spacer"></div>
            </div>

            <SearchBar
                value={searchQuery}
                onChange={onSearchChange}
                placeholder="Search..."
            />

            <div className="category-grid">
                {subcategories.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-state-text">No items found</div>
                    </div>
                ) : (
                    subcategories.map(subcat => {
                        const displayName = formatSubcategoryName(subcat);
                        const imageUrl = getSubcategoryImage(subcat);
                        return (
                            <div
                                key={subcat}
                                className="subcategory-card"
                                onClick={() => onNavigateToItems(category, subcat)}
                            >
                                <ImageWithFallback 
                                    src={imageUrl} 
                                    localPath={getSubcategoryImageLocal(subcat)}
                                    alt={displayName} 
                                    className="subcategory-card-image"
                                    category={category}
                                    subcategory={subcat}
                                />
                                <div className="subcategory-card-content">
                                    <h3 className="subcategory-name">{displayName}</h3>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default CategoryPage;

