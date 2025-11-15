import React from 'react';
import { getItemImage, getItemImageLocal } from '../utils/imageUtils';
import ImageWithFallback from './ImageWithFallback';

const ItemCard = ({ item, category, subcat, onClick }) => {
    const imageUrl = getItemImage(item.name, category, subcat);
    const localImageUrl = getItemImageLocal(item.name, category, subcat);
    const pricingHTML = generatePricingHTML(item);

    return (
        <div className="item-card" onClick={() => onClick(item, category, subcat)}>
            <div className="item-image-container">
                <ImageWithFallback 
                    src={imageUrl} 
                    localPath={localImageUrl}
                    alt={item.name}
                    className="item-image"
                    category={category}
                    subcategory={subcat}
                />
            </div>
            <div className="item-card-content">
                <h3 className="item-name">{item.name}</h3>
                {item.category && <p className="item-type">{item.category}</p>}
                {pricingHTML}
            </div>
        </div>
    );
};

function generatePricingHTML(item) {
    if (item.ml30 !== undefined) {
        return (
            <div className="pricing-grid">
                <div className="pricing-item">
                    <span className="pricing-label">30ml</span>
                    <span className="pricing-value">₹{item.ml30}</span>
                </div>
                <div className="pricing-item">
                    <span className="pricing-label">60ml</span>
                    <span className="pricing-value">₹{item.ml60}</span>
                </div>
                <div className="pricing-item">
                    <span className="pricing-label">90ml</span>
                    <span className="pricing-value">₹{item.ml90}</span>
                </div>
                <div className="pricing-item">
                    <span className="pricing-label">Nip</span>
                    <span className="pricing-value">₹{item.nip}</span>
                </div>
            </div>
        );
    } else if (item.pint !== undefined || item.full !== undefined || item.bottle !== undefined || item.tower !== undefined) {
        return (
            <div className="pricing-grid">
                {item.pint && (
                    <div className="pricing-item">
                        <span className="pricing-label">Pint</span>
                        <span className="pricing-value">₹{item.pint}</span>
                    </div>
                )}
                {item.full && (
                    <div className="pricing-item">
                        <span className="pricing-label">Full</span>
                        <span className="pricing-value">₹{item.full}</span>
                    </div>
                )}
                {item.bottle && (
                    <div className="pricing-item">
                        <span className="pricing-label">Bottle</span>
                        <span className="pricing-value">₹{item.bottle}</span>
                    </div>
                )}
                {item.tower && (
                    <div className="pricing-item">
                        <span className="pricing-label">Tower</span>
                        <span className="pricing-value">₹{item.tower}</span>
                    </div>
                )}
            </div>
        );
    } else if (item.half !== undefined) {
        return (
            <div className="pricing-grid">
                <div className="pricing-item">
                    <span className="pricing-label">Half</span>
                    <span className="pricing-value">₹{item.half}</span>
                </div>
                <div className="pricing-item">
                    <span className="pricing-label">Full</span>
                    <span className="pricing-value">₹{item.full}</span>
                </div>
            </div>
        );
    } else if (item.port !== undefined) {
        return (
            <div className="pricing-grid">
                <div className="pricing-item">
                    <span className="pricing-label">Port</span>
                    <span className="pricing-value">₹{item.port}</span>
                </div>
            </div>
        );
    } else if (item.single !== undefined) {
        return (
            <div className="pricing-grid">
                {item.single && (
                    <div className="pricing-item">
                        <span className="pricing-label">Single</span>
                        <span className="pricing-value">₹{item.single}</span>
                    </div>
                )}
                {item.packet && (
                    <div className="pricing-item">
                        <span className="pricing-label">Packet</span>
                        <span className="pricing-value">₹{item.packet}</span>
                    </div>
                )}
                {item.carton && (
                    <div className="pricing-item">
                        <span className="pricing-label">Carton</span>
                        <span className="pricing-value">₹{item.carton}</span>
                    </div>
                )}
            </div>
        );
    } else if (item.small !== undefined && item.large !== undefined) {
        return (
            <div className="pricing-grid">
                <div className="pricing-item">
                    <span className="pricing-label">Price</span>
                    <span className="pricing-value">₹{item.small} / ₹{item.large}</span>
                </div>
            </div>
        );
    } else if (item.price !== undefined) {
        return (
            <div className="pricing-grid">
                <div className="pricing-item">
                    <span className="pricing-label">Price</span>
                    <span className="pricing-value">₹{item.price}</span>
                </div>
            </div>
        );
    }
    return null;
}

export default ItemCard;

