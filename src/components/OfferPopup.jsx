import React, { useState, useEffect } from 'react';
import './OfferPopup.css';

const OfferPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check URL parameter for testing (e.g., ?showOffer=true or ?showOffer=false)
        const urlParams = new URLSearchParams(window.location.search);
        const forceShow = urlParams.get('showOffer') === 'true';
        const forceHide = urlParams.get('showOffer') === 'false';
        
        // Always show popup on page load/reload (no localStorage check)
        // Set to true to always show the popup on every reload
        const ALWAYS_SHOW = true;
        
        // Don't show if explicitly hidden via URL parameter
        if (forceHide) {
            return;
        }
        
        // Show popup if always show is enabled OR if forced via URL parameter
        if (ALWAYS_SHOW || forceShow) {
            // Show popup after a small delay for better UX
            const timer = setTimeout(() => {
                setIsOpen(true);
                document.body.style.overflow = 'hidden';
            }, 500);
            
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        document.body.style.overflow = '';
        // Note: Not saving to localStorage - popup will show on every reload
    };

    // Always render the component, but control visibility with CSS
    if (!isOpen) {
        return null;
    }

    return (
        <div className={`offer-popup ${isOpen ? 'active' : ''}`}>
            <div className="offer-popup-backdrop" onClick={handleClose}></div>
            <div className="offer-popup-content">
                <button className="offer-popup-close" onClick={handleClose}>
                    ×
                </button>
                
                {/* Offer Image Section */}
                <div className="offer-image-section">
                    <img 
                        src={`${import.meta.env.BASE_URL}images/offer/WhatsApp Image 2025-12-05 at 12.44.37 PM.jpeg`}
                        alt="Jalsa New Year Offer"
                        className="offer-image"
                        onError={(e) => {
                            // Fallback if image doesn't load
                            console.error('Offer image failed to load');
                            e.target.style.display = 'none';
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default OfferPopup;

