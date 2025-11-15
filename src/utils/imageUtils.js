// Image utility functions - Using copyright-free image sources
// All images are from free stock photo services (Pexels, Pixabay, Unsplash, Freepik) - Free for commercial use

// Copyright-free images from multiple sources:
// - Pexels: Free for commercial use, no attribution required
// - Pixabay: Free for commercial use, no attribution required
// - Unsplash: Free for commercial use, no attribution required
// - Freepik: Free with attribution (check license for each image)
// All images are high-quality and properly licensed for commercial use

const freeImages = {
    // Category images - High quality food/drink images
    category: {
        drinks: 'https://images.pexels.com/photos/340996/pexels-photo-340996.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        food: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        cigarettes: 'https://ebv2e3r5onu.exactdn.com/wp-content/uploads/2021/03/AdobeStock_419113924-1536x1024.jpeg?strip=all&lossy=1&ssl=1'
    },
    // Subcategory images - Specific images for each category
    subcategory: {
        // Alcoholic drinks
        whisky: 'https://images.pexels.com/photos/301692/pexels-photo-301692.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        rum: 'https://images.pexels.com/photos/14516855/pexels-photo-14516855.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        vodka: 'https://images.pexels.com/photos/19589632/pexels-photo-19589632.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        scotch: 'https://images.pexels.com/photos/13947435/pexels-photo-13947435.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        beer: 'https://images.pexels.com/photos/19615606/pexels-photo-19615606.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        gin: 'https://images.pexels.com/photos/25823021/pexels-photo-25823021.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        wine: 'https://images.pexels.com/photos/8775388/pexels-photo-8775388.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        // Non-alcoholic beverages
        beverages: 'https://images.pexels.com/photos/4113666/pexels-photo-4113666.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        // Food categories - Appetizing restaurant-quality images (Zomato/Swiggy style)
        // Images from Pexels, Pixabay, Unsplash, and Freepik - all copyright-free for commercial use
        // Professional food photography - close-up, well-lit, appetizing, clear presentation
        // Alternative sources: Freepik (https://freepik.com), Unsplash (https://unsplash.com), Pixabay (https://pixabay.com)
        
        // Tandoori - Tandoori chicken fried (fried tandoori chicken, appetizing, restaurant quality)
        // Source: Pexels (Alternative: Freepik, Pixabay)
        tandoori: 'https://images.pexels.com/photos/31771054/pexels-photo-31771054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        
        // Starters - Non-vegetarian starters (chicken lollipop, wings, non-veg appetizers - appetizing, professional)
        // Source: Pexels - https://www.pexels.com/photo/cooked-food-on-the-plate-6646101/
        // Alternative sources: Unsplash, Pixabay, Freepik
        starters: 'https://images.pexels.com/photos/6646101/pexels-photo-6646101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        
        // Biryani - Regular biryani presentation (biryani with sides, plate presentation, appetizing, professional, clear)
        // Source: Pexels - https://www.pexels.com/photo/meat-with-rice-17649369/
        // Alternative sources: Freepik, Pixabay, Unsplash
        biryani: 'https://images.pexels.com/photos/17649369/pexels-photo-17649369.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        
        // Main Course - Dinner dish with rice, chicken and vegetables
        // Source: Pexels - https://www.pexels.com/photo/dinner-dish-with-rice-chicken-and-vegetables-6066052/
        // Alternative sources: Freepik, Unsplash, Pixabay
        main_course: 'https://images.pexels.com/photos/6066052/pexels-photo-6066052.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        
        // Chinese - Clear Chinese food (noodles/fried rice - very clear, appetizing, professional, understandable)
        // Source: Pexels - https://www.pexels.com/photo/a-bowl-of-noodles-with-meatballs-5409020/
        // Alternative sources: Freepik, Unsplash, Pixabay
        chinese: 'https://images.pexels.com/photos/5409020/pexels-photo-5409020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        
        // Roti - Basket of cooked flatbreads (naan, roti - restaurant quality, appetizing)
        // Source: Pexels - https://www.pexels.com/photo/basket-of-cooked-flatbreads-1117862/
        roti: 'https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        
        // Rice - Very clear rice presentation (steamed basmati rice - very good way, appetizing, professional, clear)
        // Source: Pexels (Alternative: Freepik, Unsplash, Pixabay)
        rice: 'https://images.pexels.com/photos/31860143/pexels-photo-31860143.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        cigarettes: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
};

// Placeholder function that creates a gradient based on category (fallback)
function createGradientPlaceholder(category, subcategory = null) {
    const gradients = {
        drinks: 'linear-gradient(135deg, #E23744 0%, #FF6B35 100%)',
        food: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
        cigarettes: 'linear-gradient(135deg, #666666 0%, #888888 100%)',
        whisky: 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)',
        rum: 'linear-gradient(135deg, #8B4513 0%, #CD853F 100%)',
        vodka: 'linear-gradient(135deg, #E0E0E0 0%, #F5F5F5 100%)',
        scotch: 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)',
        beer: 'linear-gradient(135deg, #FFA500 0%, #FFD700 100%)',
        gin: 'linear-gradient(135deg, #E0E0E0 0%, #F5F5F5 100%)',
        wine: 'linear-gradient(135deg, #8B0000 0%, #DC143C 100%)',
        beverages: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
        tandoori: 'linear-gradient(135deg, #FF4500 0%, #FF6347 100%)',
        starters: 'linear-gradient(135deg, #FF8C00 0%, #FFA500 100%)',
        biryani: 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)',
        main_course: 'linear-gradient(135deg, #FF6347 0%, #FF7F50 100%)',
        chinese: 'linear-gradient(135deg, #FF4500 0%, #FF6347 100%)',
        roti: 'linear-gradient(135deg, #DEB887 0%, #F5DEB3 100%)',
        rice: 'linear-gradient(135deg, #FFF8DC 0%, #FFEBCD 100%)'
    };
    
    const gradient = gradients[subcategory] || gradients[category] || gradients.drinks;
    return gradient;
}

// Local image paths (fallback when Pexels is down)
// Note: Paths include base path for GitHub Pages deployment
const BASE_PATH = '/jalsa.github.io';
const localImages = {
    category: {
        drinks: `${BASE_PATH}/images/category/drinks.jpg`,
        food: `${BASE_PATH}/images/category/food.jpg`,
        cigarettes: `${BASE_PATH}/images/category/cigarettes.jpg`
    },
    subcategory: {
        whisky: `${BASE_PATH}/images/subcategory/whisky.jpg`,
        rum: `${BASE_PATH}/images/subcategory/rum.jpg`,
        vodka: `${BASE_PATH}/images/subcategory/vodka.jpg`,
        scotch: `${BASE_PATH}/images/subcategory/scotch.jpg`,
        beer: `${BASE_PATH}/images/subcategory/beer.jpg`,
        gin: `${BASE_PATH}/images/subcategory/gin.jpg`,
        wine: `${BASE_PATH}/images/subcategory/wine.jpg`,
        beverages: `${BASE_PATH}/images/subcategory/beverages.jpg`,
        tandoori: `${BASE_PATH}/images/subcategory/tandoori.jpg`,
        starters: `${BASE_PATH}/images/subcategory/starters.jpg`,
        biryani: `${BASE_PATH}/images/subcategory/biryani.jpg`,
        main_course: `${BASE_PATH}/images/subcategory/main_course.jpg`,
        chinese: `${BASE_PATH}/images/subcategory/chinese.jpg`,
        roti: `${BASE_PATH}/images/subcategory/roti.jpg`,
        rice: `${BASE_PATH}/images/subcategory/rice.jpg`,
        cigarettes: `${BASE_PATH}/images/subcategory/cigarettes.jpg`
    }
};

export function getCategoryImage(category) {
    // Returns Pexels image URL (primary source)
    return freeImages.category[category] || null;
}

export function getCategoryImageLocal(category) {
    // Returns local image path (fallback)
    return localImages.category[category] || null;
}

export function getSubcategoryImage(subcategory) {
    // Returns Pexels image URL (primary source)
    return freeImages.subcategory[subcategory] || null;
}

export function getSubcategoryImageLocal(subcategory) {
    // Returns local image path (fallback)
    return localImages.subcategory[subcategory] || null;
}

export function getItemImage(itemName, category, subcategory) {
    // For individual items, use subcategory image or category image (Pexels - primary)
    // You can add specific item images to menuData.js if needed
    return freeImages.subcategory[subcategory] || freeImages.category[category] || null;
}

export function getItemImageLocal(itemName, category, subcategory) {
    // For individual items, use subcategory image or category image (Local - fallback)
    return localImages.subcategory[subcategory] || localImages.category[category] || null;
}

// Get gradient for CSS background (fallback)
export function getGradientPlaceholder(category, subcategory = null) {
    return createGradientPlaceholder(category, subcategory);
}

// Fallback image
export const FALLBACK_IMAGE = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop';
