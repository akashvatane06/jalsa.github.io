import React from 'react';
import { getItemImage, getItemImageLocal } from '../utils/imageUtils';
import ImageWithFallback from './ImageWithFallback';

const Modal = ({ item, category, subcat, isOpen, onClose }) => {
    if (!isOpen || !item) return null;

    const imageUrl = getItemImage(item.name, category, subcat);
    const localImageUrl = getItemImageLocal(item.name, category, subcat);
    const pricingHTML = generateModalPricingHTML(item);

    return (
        <div className={`modal ${isOpen ? 'active' : ''}`}>
            <div className="modal-backdrop" onClick={onClose}></div>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>×</button>
                <div className="modal-body">
                    <div className="modal-image-container">
                        <ImageWithFallback 
                            src={imageUrl} 
                            localPath={localImageUrl}
                            alt={item.name}
                            className="modal-image"
                            category={category}
                            subcategory={subcat}
                        />
                    </div>
                    <h2 className="modal-title">{item.name}</h2>
                    {item.category && <p className="modal-type">{item.category}</p>}
                    <div className="modal-pricing">
                        <h3 className="pricing-title">Pricing</h3>
                        <div className="pricing-table">
                            {pricingHTML}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function generateModalPricingHTML(item) {
    let rows = [];

    if (item.ml30 !== undefined) {
        rows.push(<div key="30ml" className="pricing-row"><span className="pricing-label">30ml</span><span className="pricing-value">₹{item.ml30}</span></div>);
        rows.push(<div key="60ml" className="pricing-row"><span className="pricing-label">60ml</span><span className="pricing-value">₹{item.ml60}</span></div>);
        rows.push(<div key="90ml" className="pricing-row"><span className="pricing-label">90ml</span><span className="pricing-value">₹{item.ml90}</span></div>);
        rows.push(<div key="nip" className="pricing-row"><span className="pricing-label">Nip</span><span className="pricing-value">₹{item.nip}</span></div>);
    } else if (item.pint !== undefined || item.full !== undefined || item.bottle !== undefined || item.tower !== undefined) {
        if (item.pint) rows.push(<div key="pint" className="pricing-row"><span className="pricing-label">Pint</span><span className="pricing-value">₹{item.pint}</span></div>);
        if (item.full) rows.push(<div key="full" className="pricing-row"><span className="pricing-label">Full</span><span className="pricing-value">₹{item.full}</span></div>);
        if (item.bottle) rows.push(<div key="bottle" className="pricing-row"><span className="pricing-label">Bottle</span><span className="pricing-value">₹{item.bottle}</span></div>);
        if (item.tower) rows.push(<div key="tower" className="pricing-row"><span className="pricing-label">Tower</span><span className="pricing-value">₹{item.tower}</span></div>);
    } else if (item.half !== undefined) {
        rows.push(<div key="half" className="pricing-row"><span className="pricing-label">Half</span><span className="pricing-value">₹{item.half}</span></div>);
        rows.push(<div key="full" className="pricing-row"><span className="pricing-label">Full</span><span className="pricing-value">₹{item.full}</span></div>);
    } else if (item.port !== undefined) {
        rows.push(<div key="port" className="pricing-row"><span className="pricing-label">Port</span><span className="pricing-value">₹{item.port}</span></div>);
    } else if (item.single !== undefined) {
        if (item.single) rows.push(<div key="single" className="pricing-row"><span className="pricing-label">Single</span><span className="pricing-value">₹{item.single}</span></div>);
        if (item.packet) rows.push(<div key="packet" className="pricing-row"><span className="pricing-label">Packet</span><span className="pricing-value">₹{item.packet}</span></div>);
        if (item.carton) rows.push(<div key="carton" className="pricing-row"><span className="pricing-label">Carton</span><span className="pricing-value">₹{item.carton}</span></div>);
    } else if (item.price !== undefined) {
        rows.push(<div key="price" className="pricing-row"><span className="pricing-label">Price</span><span className="pricing-value">₹{item.price}</span></div>);
    }

    return rows;
}

export default Modal;

