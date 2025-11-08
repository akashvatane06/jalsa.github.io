import React, { useEffect } from 'react';
import { categoryMeta, calculateCounts } from '../data/menuData';
import { getCategoryImage, getCategoryImageLocal } from '../utils/imageUtils';
import ImageWithFallback from './ImageWithFallback';

const HomePage = ({ onNavigateToCategory, onNavigateToItems }) => {
    // Calculate counts on mount
    useEffect(() => {
        calculateCounts();
    }, []);

    return (
        <div className="screen active">
            <div className="hero-section">
                <div className="logo-container">
                    <div className="logo-image-wrapper">
                        <ImageWithFallback 
                            src="/jalsa.github.io/images/logo/WhatsApp_Image_2025-10-27_at_6.36.26_PM-removebg-preview.png" 
                            localPath="/jalsa.github.io/images/logo/WhatsApp_Image_2025-10-27_at_6.36.26_PM-removebg-preview.png"
                            alt="Jalsa Logo" 
                            className="jalsa-logo-image"
                            category="drinks"
                        />
                    </div>
                    <div className="divider"></div>
                    <p className="tagline">Premium Spirits, Fine Dining & More</p>
                </div>
            </div>

            <div className="home-content">
                    <div className="category-card" onClick={() => onNavigateToCategory('drinks')}>
                        <ImageWithFallback 
                            src={getCategoryImage('drinks')} 
                            localPath={getCategoryImageLocal('drinks')}
                            alt="Drinks" 
                            className="category-card-image"
                            category="drinks"
                        />
                        <div className="category-card-content">
                            <h2 className="category-name">{categoryMeta.drinks.name}</h2>
                            <p className="category-tagline">{categoryMeta.drinks.tagline}</p>
                        </div>
                    </div>
                    <div className="category-card" onClick={() => onNavigateToCategory('food')}>
                        <ImageWithFallback 
                            src={getCategoryImage('food')} 
                            localPath={getCategoryImageLocal('food')}
                            alt="Food" 
                            className="category-card-image"
                            category="food"
                        />
                        <div className="category-card-content">
                            <h2 className="category-name">{categoryMeta.food.name}</h2>
                            <p className="category-tagline">{categoryMeta.food.tagline}</p>
                        </div>
                    </div>
                    <div className="category-card" onClick={() => onNavigateToItems('cigarettes', 'cigarettes')}>
                        <ImageWithFallback 
                            src={getCategoryImage('cigarettes')} 
                            localPath={getCategoryImageLocal('cigarettes')}
                            alt="Cigarettes" 
                            className="category-card-image"
                            category="cigarettes"
                        />
                        <div className="category-card-content">
                            <h2 className="category-name">{categoryMeta.cigarettes.name}</h2>
                            <p className="category-tagline">{categoryMeta.cigarettes.tagline}</p>
                            <p className="health-warning">Smoking causes serious health risks and injuries to health</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default HomePage;

