// Complete Data Structure
const menuData = {
    drinks: {
        whisky: [
            { name: 'Amrut', ml30: 600, ml60: 1100, ml90: 1400, nip: 2700, category: 'Indian Single Malt' },
            { name: 'Indri', ml30: 600, ml60: 1200, ml90: 1450, nip: 2800, category: 'Indian Single Malt' },
            { name: 'MCD No 1 Original', ml30: 120, ml60: 150, ml90: 180, nip: 330, category: 'Indian Whisky' },
            { name: 'MCD No 1 Luxury', ml30: 110, ml60: 140, ml90: 170, nip: 320, category: 'Indian Whisky' },
            { name: 'MCD No 1 Platinum', ml30: 120, ml60: 150, ml90: 190, nip: 340, category: 'Indian Whisky' },
            { name: 'Blenders Pride', ml30: 200, ml60: 250, ml90: 320, nip: 610, category: 'Premium Blend' },
            { name: 'Blenders Pride Reserve', ml30: 180, ml60: 260, ml90: 370, nip: 670, category: 'Premium Blend' },
            { name: 'Oaksmith Blend', ml30: 100, ml60: 160, ml90: 230, nip: 410, category: 'Blended Whisky' },
            { name: 'Oaksmith Gold', ml30: 200, ml60: 250, ml90: 320, nip: 610, category: 'Premium Blend' },
            { name: 'Royal Stag', ml30: 130, ml60: 170, ml90: 200, nip: 380, category: 'Indian Whisky' },
            { name: 'Royal Stag Barrel', ml30: 170, ml60: 230, ml90: 270, nip: 450, category: 'Premium Blend' },
            { name: 'Royal Challenge', ml30: 130, ml60: 170, ml90: 200, nip: 380, category: 'Indian Whisky' },
            { name: 'Imperial Blue', ml30: 110, ml60: 140, ml90: 170, nip: 320, category: 'Indian Whisky' },
            { name: 'Rockford', ml30: 270, ml60: 320, ml90: 420, nip: 780, category: 'Premium Blend' },
            { name: 'Signature', ml30: 210, ml60: 260, ml90: 330, nip: 630, category: 'Premium Blend' },
            { name: 'Signature Premier', ml30: 230, ml60: 280, ml90: 380, nip: 630, category: 'Premium Blend' },
            { name: 'Sterling Reserve', ml30: 130, ml60: 170, ml90: 200, nip: 380, category: 'Indian Whisky' },
            { name: 'Sterling B10', ml30: 200, ml60: 250, ml90: 320, nip: 610, category: 'Premium Blend' },
            { name: 'Antiquity Blue', ml30: 250, ml60: 300, ml90: 400, nip: 700, category: 'Premium Blend' },
            { name: 'Chivas Regal', ml30: 510, ml60: 1010, ml90: 1410, nip: 2710, category: 'Premium Scotch' },
            { name: 'Black Label', ml30: 510, ml60: 1010, ml90: 1410, nip: 2710, category: 'Premium Scotch' },
            { name: 'Royal Ranthambore', ml30: 350, ml60: 450, ml90: 650, nip: 1220, category: 'Premium Indian' },
            { name: 'Jameson', ml30: 430, ml60: 620, ml90: 780, nip: 1480, category: 'Irish Whisky' },
            { name: 'Directors Special', ml30: 180, ml60: 260, ml90: 370, nip: 670, category: 'Premium Blend' },
            { name: 'Officers Choice', ml30: 100, ml60: 140, ml90: 170, nip: 300, category: 'Indian Whisky' },
            { name: 'Original Choice', ml30: 100, ml60: 140, ml90: 170, nip: 300, category: 'Indian Whisky' },
            { name: 'Bagpiper', ml30: 90, ml60: 130, ml90: 160, nip: 290, category: 'Indian Whisky' },
            { name: 'Haywards', ml30: 90, ml60: 130, ml90: 160, nip: 290, category: 'Indian Whisky' },
            { name: 'White Horse', ml30: 210, ml60: 330, ml90: 490, nip: 930, category: 'Scotch Whisky' }
        ],
        rum: [
            { name: 'Old Monk', ml30: 100, ml60: 140, ml90: 170, nip: 300, category: 'Dark Rum' },
            { name: 'Bacardi', ml30: 130, ml60: 230, ml90: 330, nip: 610, category: 'White Rum' },
            { name: 'Captain Morgan', ml30: 90, ml60: 150, ml90: 180, nip: 330, category: 'Spiced Rum' },
            { name: 'Bacardi Black', ml30: 110, ml60: 150, ml90: 180, nip: 350, category: 'Dark Rum' },
            { name: 'Old Port', ml30: 90, ml60: 130, ml90: 160, nip: 290, category: 'Indian Rum' },
            { name: 'Contessa', ml30: 80, ml60: 120, ml90: 150, nip: 270, category: 'Indian Rum' },
            { name: 'Hercules XXX', ml30: 90, ml60: 130, ml90: 160, nip: 290, category: 'Indian Rum' }
        ],
        vodka: [
            { name: 'Smirnoff', ml30: 210, ml60: 240, ml90: 320, nip: 610, category: 'Premium Vodka' },
            { name: 'Absolute Vodka', ml30: 320, ml60: 520, ml90: 730, nip: 1430, category: 'Premium Vodka' },
            { name: 'Magic Moments', ml30: 120, ml60: 180, ml90: 210, nip: 390, category: 'Indian Vodka' },
            { name: 'Romanov', ml30: 90, ml60: 150, ml90: 180, nip: 330, category: 'Indian Vodka' },
            { name: 'White Mischief', ml30: 100, ml60: 140, ml90: 170, nip: 310, category: 'Indian Vodka' },
            { name: 'Vladivar', ml30: 100, ml60: 140, ml90: 170, nip: 310, category: 'Indian Vodka' },
            { name: 'Eristoff', ml30: 180, ml60: 260, ml90: 360, nip: 670, category: 'Premium Vodka' },
            { name: 'Grey Goose', ml30: 450, ml60: 750, ml90: 1050, nip: 2000, category: 'Luxury Vodka' },
            { name: 'Belvedere', ml30: 420, ml60: 720, ml90: 1020, nip: 1950, category: 'Luxury Vodka' },
            { name: 'Ciroc', ml30: 400, ml60: 700, ml90: 980, nip: 1880, category: 'Premium Vodka' },
            { name: 'Ketel One', ml30: 280, ml60: 450, ml90: 620, nip: 1180, category: 'Premium Vodka' },
            { name: 'Stolichnaya', ml30: 250, ml60: 400, ml90: 550, nip: 1050, category: 'Premium Vodka' },
            { name: 'Skyy Vodka', ml30: 180, ml60: 280, ml90: 380, nip: 720, category: 'Premium Vodka' },
            { name: 'Finlandia', ml30: 220, ml60: 350, ml90: 480, nip: 920, category: 'Premium Vodka' },
            { name: 'Russian Standard', ml30: 200, ml60: 320, ml90: 440, nip: 840, category: 'Premium Vodka' },
            { name: 'Beluga', ml30: 380, ml60: 650, ml90: 920, nip: 1750, category: 'Luxury Vodka' }
        ],
        scotch: [
            { name: 'Johnnie Walker', ml30: 310, ml60: 510, ml90: 710, nip: 1310, category: 'Blended Scotch' },
            { name: 'Red Label', ml30: 220, ml60: 390, ml90: 580, nip: 1120, category: 'Blended Scotch' },
            { name: 'Teachers', ml30: 300, ml60: 500, ml90: 700, nip: 1360, category: 'Blended Scotch' },
            { name: '100 Pipers', ml30: 220, ml60: 380, ml90: 560, nip: 1080, category: 'Blended Scotch' },
            { name: 'Vat 69', ml30: 210, ml60: 370, ml90: 540, nip: 1040, category: 'Blended Scotch' },
            { name: 'William Lawson', ml30: 200, ml60: 350, ml90: 510, nip: 980, category: 'Blended Scotch' },
            { name: 'Old Smuggler', ml30: 190, ml60: 330, ml90: 480, nip: 920, category: 'Blended Scotch' },
            { name: 'Passport', ml30: 180, ml60: 310, ml90: 450, nip: 860, category: 'Blended Scotch' },
            { name: 'Black &amp; White', ml30: 200, ml60: 350, ml90: 510, nip: 980, category: 'Blended Scotch' },
            { name: 'Cutty Sark', ml30: 220, ml60: 380, ml90: 560, nip: 1080, category: 'Blended Scotch' },
            { name: 'Dewars White Label', ml30: 280, ml60: 460, ml90: 650, nip: 1260, category: 'Blended Scotch' },
            { name: 'Famous Grouse', ml30: 240, ml60: 410, ml90: 600, nip: 1160, category: 'Blended Scotch' },
            { name: 'Grants', ml30: 220, ml60: 380, ml90: 560, nip: 1080, category: 'Blended Scotch' },
            { name: 'J&amp;B Rare', ml30: 250, ml60: 420, ml90: 620, nip: 1200, category: 'Blended Scotch' },
            { name: 'Ballantines', ml30: 240, ml60: 410, ml90: 600, nip: 1160, category: 'Blended Scotch' },
            { name: 'White &amp; Mackay', ml30: 210, ml60: 370, ml90: 540, nip: 1040, category: 'Blended Scotch' }
        ],
        beer: [
            { name: 'Kingfisher Strong', pint: 230, full: 380, category: 'Strong Beer' },
            { name: 'Tuborg Strong', pint: 230, full: 380, category: 'Strong Beer' },
            { name: 'Budweiser Magnum', pint: 360, full: 460, category: 'Premium Beer' },
            { name: 'Bira White', bottle: 380, category: 'Craft Beer' },
            { name: 'Heineken', full: 360, category: 'Premium Beer' },
            { name: 'Carlsberg', pint: 200, full: 330, category: 'Lager' },
            { name: 'Corona', bottle: 400, category: 'Premium Beer' },
            { name: 'Stella Artois', bottle: 380, category: 'Premium Beer' },
            { name: 'Hoegaarden', bottle: 390, category: 'Wheat Beer' },
            { name: 'Foster', pint: 210, full: 340, category: 'Lager' },
            { name: 'Kingfisher Premium', pint: 210, full: 340, category: 'Lager' },
            { name: 'Kingfisher Ultra', bottle: 280, category: 'Light Beer' },
            { name: 'Tuborg Green', pint: 200, full: 330, category: 'Lager' },
            { name: 'Haywards 5000', pint: 220, full: 360, category: 'Strong Beer' },
            { name: 'Royal Challenge', pint: 220, full: 360, category: 'Strong Beer' },
            { name: 'Knock Out', pint: 210, full: 350, category: 'Strong Beer' },
            { name: 'Bullet', pint: 200, full: 330, category: 'Strong Beer' },
            { name: 'Black Fort', pint: 210, full: 350, category: 'Strong Beer' },
            { name: 'Zingaro', pint: 210, full: 350, category: 'Strong Beer' },
            { name: 'Black & White', pint: 210, full: 350, category: 'Strong Beer' },
            { name: 'Simba Wit', bottle: 350, category: 'Craft Beer' },
            { name: 'Simba Strong', bottle: 340, category: 'Craft Beer' },
            { name: 'Bira Boom', bottle: 360, category: 'Craft Beer' },
            { name: 'Bira 91 Blonde', bottle: 380, category: 'Craft Beer' },
            { name: 'White Owl', bottle: 350, category: 'Craft Beer' },
            { name: 'Kingfisher Tower', tower: 1800, category: 'Tower' },
            { name: 'Tuborg Tower', tower: 1800, category: 'Tower' },
            { name: 'Budweiser Tower', tower: 2200, category: 'Tower' },
            { name: 'Carlsberg Tower', tower: 1600, category: 'Tower' },
            { name: 'Fosters Tower', tower: 1700, category: 'Tower' },
            { name: 'Haywards Tower', tower: 1750, category: 'Tower' }
        ],
        gin: [
            { name: 'Greater Than London', ml30: 210, ml60: 290, ml90: 440, nip: 850, category: 'London Dry Gin' },
            { name: 'Blue Riband Gin', ml30: 110, ml60: 130, ml90: 160, nip: 300, category: 'Indian Gin' },
            { name: 'Bombay Sapphire', ml30: 310, ml60: 510, ml90: 710, nip: 1360, category: 'Premium Gin' }
        ],
        wine: [
            { name: 'Sula White', port: 590, category: 'White Wine' },
            { name: 'Sula Red', port: 660, category: 'Red Wine' },
            { name: 'Fratelli Sangiovese', port: 890, category: 'Red Wine' }
        ],
        beverages: [
            { name: 'Fresh Lime Soda', price: 60, category: 'Fresh Juice' },
            { name: 'Fresh Lime Water', price: 50, category: 'Fresh Juice' },
            { name: 'Fresh Orange Juice', price: 110, category: 'Fresh Juice' },
            { name: 'Fresh Pineapple Juice', price: 110, category: 'Fresh Juice' },
            { name: 'Fresh Watermelon Juice', price: 100, category: 'Fresh Juice' },
            { name: 'Diet Coke', price: 70, category: 'Soft Drink' },
            { name: 'Coca Cola', price: 70, category: 'Soft Drink' },
            { name: 'Sprite', price: 70, category: 'Soft Drink' },
            { name: 'Fanta', price: 70, category: 'Soft Drink' },
            { name: 'Thums Up', price: 70, category: 'Soft Drink' },
            { name: 'Red Bull', price: 210, category: 'Energy Drink' },
            { name: 'Ginger Ale', price: 110, category: 'Soft Drink' },
            { name: 'Tonic Water', price: 100, category: 'Mixer' },
            { name: 'Soda Water', price: 50, category: 'Mixer' }
        ]
    },
    food: {
        tandoori: [
            { name: 'Chicken Shikari Kabab', price: 400, category: 'Tandoori' },
            { name: 'Tandoori Chicken', half: 310, full: 510, category: 'Tandoori' },
            { name: 'Tandoori Prawns', price: 390, category: 'Tandoori' },
            { name: 'Chicken Tikka', price: 380, category: 'Tandoori' },
            { name: 'Paneer Tikka', price: 350, category: 'Tandoori' },
            { name: 'Malai Chicken Tikka', price: 390, category: 'Tandoori' },
            { name: 'Hariyali Chicken Tikka', price: 390, category: 'Tandoori' },
            { name: 'Achari Chicken Tikka', price: 390, category: 'Tandoori' },
            { name: 'Chicken Seekh Kebab', price: 380, category: 'Tandoori' },
            { name: 'Mutton Seekh Kebab', price: 440, category: 'Tandoori' },
            { name: 'Chicken Reshmi Kebab', price: 390, category: 'Tandoori' },
            { name: 'Tandoori Fish Tikka', price: 410, category: 'Tandoori' },
            { name: 'Tandoori Pomfret', price: 590, category: 'Tandoori' },
            { name: 'Ajwaini Fish Tikka', price: 410, category: 'Tandoori' },
            { name: 'Tangdi Kabab', half: 300, full: 500, category: 'Tandoori' },
            { name: 'Chicken Banjara Kebab', price: 390, category: 'Tandoori' },
            { name: 'Mutton Boti Kebab', price: 450, category: 'Tandoori' },
            { name: 'Paneer Malai Tikka', price: 360, category: 'Tandoori' },
            { name: 'Paneer Achari Tikka', price: 360, category: 'Tandoori' },
            { name: 'Mushroom Tikka', price: 340, category: 'Tandoori' },
            { name: 'Soya Chaap Tikka', price: 320, category: 'Tandoori' },
            { name: 'Stuffed Tangdi', price: 410, category: 'Tandoori' }
        ],
        starters: [
            { name: 'Chicken Lollipop Dry', half: 200, full: 320, category: 'Starter' },
            { name: 'Chicken Lollipop Gravy', half: 210, full: 340, category: 'Starter' },
            { name: 'Paneer Chilli', price: 330, category: 'Starter' },
            { name: 'Chicken 65', price: 330, category: 'Starter' },
            { name: 'French Fries', price: 170, category: 'Starter' },
            { name: 'Chicken Wings', half: 220, full: 360, category: 'Starter' },
            { name: 'Chicken Nuggets', price: 290, category: 'Starter' },
            { name: 'Honey Chilli Potato', price: 250, category: 'Starter' },
            { name: 'Crispy Corn', price: 240, category: 'Starter' },
            { name: 'Veg Spring Roll', price: 220, category: 'Starter' },
            { name: 'Chicken Spring Roll', price: 260, category: 'Starter' },
            { name: 'Fish Finger', price: 350, category: 'Starter' },
            { name: 'Chilli Fish', price: 380, category: 'Starter' },
            { name: 'Prawn Koliwada', price: 390, category: 'Starter' },
            { name: 'Papdi Chaat', price: 180, category: 'Starter' }
        ],
        biryani: [
            { name: 'Chicken Dum Biryani', price: 360, category: 'Biryani' },
            { name: 'Chicken Matka Biryani Chef', price: 400, category: 'Biryani' },
            { name: 'Veg Dum Biryani', price: 330, category: 'Biryani' },
            { name: 'Mutton Dum Biryani', price: 460, category: 'Biryani' },
            { name: 'Egg Biryani', price: 290, category: 'Biryani' },
            { name: 'Prawns Biryani', price: 420, category: 'Biryani' },
            { name: 'Fish Biryani', price: 390, category: 'Biryani' },
            { name: 'Paneer Biryani', price: 350, category: 'Biryani' },
            { name: 'Mushroom Biryani', price: 340, category: 'Biryani' },
            { name: 'Hyderabadi Biryani', price: 380, category: 'Biryani' }
        ],
        main_course: [
            { name: 'Butter Chicken', half: 380, full: 740, category: 'Main Course' },
            { name: 'Chicken Handi', half: 380, full: 640, category: 'Main Course' },
            { name: 'Paneer Butter Masala', price: 350, category: 'Main Course' },
            { name: 'Dal Fry', price: 190, category: 'Main Course' },
            { name: 'Dal Makhani', price: 240, category: 'Main Course' },
            { name: 'Chicken Kadhai', half: 360, full: 620, category: 'Main Course' },
            { name: 'Mutton Rogan Josh', half: 420, full: 780, category: 'Main Course' },
            { name: 'Chicken Curry', half: 340, full: 580, category: 'Main Course' },
            { name: 'Paneer Kadhai', price: 340, category: 'Main Course' },
            { name: 'Mix Veg', price: 280, category: 'Main Course' },
            { name: 'Palak Paneer', price: 340, category: 'Main Course' }
        ],
        chinese: [
            { name: 'Chicken Hakka Noodles', price: 370, category: 'Chinese' },
            { name: 'Chicken Fried Rice', price: 350, category: 'Chinese' },
            { name: 'Veg Fried Rice', price: 330, category: 'Chinese' },
            { name: 'Veg Hakka Noodles', price: 340, category: 'Chinese' },
            { name: 'Egg Fried Rice', price: 320, category: 'Chinese' },
            { name: 'Schezwan Noodles', price: 360, category: 'Chinese' }
        ],
        breads: [
            { name: 'Butter Naan', price: 70, category: 'Bread' },
            { name: 'Roti', price: 40, category: 'Bread' },
            { name: 'Aloo Paratha', price: 110, category: 'Bread' },
            { name: 'Garlic Naan', price: 80, category: 'Bread' },
            { name: 'Plain Naan', price: 60, category: 'Bread' },
            { name: 'Lachha Paratha', price: 90, category: 'Bread' },
            { name: 'Pudina Paratha', price: 100, category: 'Bread' },
            { name: 'Cheese Naan', price: 120, category: 'Bread' }
        ],
        rice: [
            { name: 'Jeera Rice', half: 120, full: 230, category: 'Rice' },
            { name: 'Steam Rice', half: 110, full: 210, category: 'Rice' },
            { name: 'Veg Pulao', half: 140, full: 260, category: 'Rice' }
        ]
    },
    cigarettes: [
        { name: 'Classic Mild', single: 25, packet: 180, carton: 350, category: 'Cigarettes' },
        { name: 'Gold Flake King', single: 25, packet: 180, category: 'Cigarettes' },
        { name: 'Marlboro Advance', single: 25, packet: 180, carton: 350, category: 'Cigarettes' },
        { name: 'Dunhill', single: 30, packet: 220, carton: 430, category: 'Cigarettes' },
        { name: 'Davidoff', single: 35, packet: 260, carton: 500, category: 'Cigarettes' }
    ]
};

// State management
let currentView = 'home'; // 'home', 'category', 'items'
let currentCategory = null;
let currentSubcategory = null;
let navigationStack = [];

// DOM Elements
const homePage = document.getElementById('homePage');
const categoryPage = document.getElementById('categoryPage');
const itemsPage = document.getElementById('itemsPage');
const homeSearchInput = document.getElementById('homeSearchInput');
const categorySearchInput = document.getElementById('categorySearchInput');
const itemsSearchInput = document.getElementById('itemsSearchInput');
const homeContent = document.getElementById('homeContent');
const searchResults = document.getElementById('searchResults');
const categoryGrid = document.getElementById('categoryGrid');
const itemsGrid = document.getElementById('itemsGrid');
const categoryTitle = document.getElementById('categoryTitle');
const itemsTitle = document.getElementById('itemsTitle');
const categoryBackBtn = document.getElementById('categoryBackBtn');
const itemsBackBtn = document.getElementById('itemsBackBtn');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalBackdrop = document.querySelector('.modal-backdrop');

// Category metadata
const categoryMeta = {
    drinks: {
        icon: '🥃',
        name: 'DRINKS',
        tagline: 'Premium Spirits & Finest Selection',
        count: 0
    },
    food: {
        icon: '🍽️',
        name: 'FOOD',
        tagline: 'Authentic Flavors & Delicious Cuisine',
        count: 0
    },
    cigarettes: {
        icon: '🚬',
        name: 'CIGARETTES',
        tagline: 'Premium Tobacco Selection',
        count: 0
    }
};

// Calculate item counts
function calculateCounts() {
    categoryMeta.drinks.count = Object.values(menuData.drinks).reduce((sum, items) => sum + items.length, 0);
    categoryMeta.food.count = Object.values(menuData.food).reduce((sum, items) => sum + items.length, 0);
    categoryMeta.cigarettes.count = menuData.cigarettes.length;
}

// Initialize app
function init() {
    calculateCounts();
    setupEventListeners();
    renderHomePage();
}

// Event Listeners
function setupEventListeners() {
    // Back buttons
    categoryBackBtn.addEventListener('click', navigateToHome);
    itemsBackBtn.addEventListener('click', navigateBack);

    // Search inputs
    homeSearchInput.addEventListener('input', handleHomeSearch);
    categorySearchInput.addEventListener('input', handleCategorySearch);
    itemsSearchInput.addEventListener('input', handleItemsSearch);

    // Modal close
    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
}

// Navigation Functions
function switchScreen(from, to) {
    from.classList.remove('active');
    setTimeout(() => {
        to.classList.add('active');
    }, 50);
}

function navigateToHome() {
    currentView = 'home';
    currentCategory = null;
    currentSubcategory = null;
    navigationStack = [];
    
    if (categoryPage.classList.contains('active')) {
        switchScreen(categoryPage, homePage);
    } else if (itemsPage.classList.contains('active')) {
        switchScreen(itemsPage, homePage);
    }
    
    homeSearchInput.value = '';
    categorySearchInput.value = '';
    itemsSearchInput.value = '';
    homeContent.style.display = 'grid';
    searchResults.style.display = 'none';
}

function navigateToCategory(category) {
    currentView = 'category';
    currentCategory = category;
    currentSubcategory = null;
    navigationStack.push('home');
    
    switchScreen(homePage, categoryPage);
    renderCategoryPage();
}

function navigateToItems(category, subcategory) {
    currentView = 'items';
    currentCategory = category;
    currentSubcategory = subcategory;
    navigationStack.push('category');
    
    if (categoryPage.classList.contains('active')) {
        switchScreen(categoryPage, itemsPage);
    } else {
        switchScreen(homePage, itemsPage);
    }
    
    renderItemsPage();
}

function navigateBack() {
    const previous = navigationStack.pop();
    
    if (previous === 'category') {
        currentView = 'category';
        currentSubcategory = null;
        switchScreen(itemsPage, categoryPage);
        itemsSearchInput.value = '';
        renderCategoryPage();
    } else if (previous === 'home') {
        navigateToHome();
    }
}

// Render Home Page
function renderHomePage() {
    homeContent.innerHTML = `
        <div class="category-card" data-category="drinks">
            <div class="category-icon">${categoryMeta.drinks.icon}</div>
            <h2 class="category-name">${categoryMeta.drinks.name}</h2>
           
            <p class="category-tagline">${categoryMeta.drinks.tagline}</p>
        </div>
        <div class="category-card" data-category="food">
            <div class="category-icon">${categoryMeta.food.icon}</div>
            <h2 class="category-name">${categoryMeta.food.name}</h2>
            
            <p class="category-tagline">${categoryMeta.food.tagline}</p>
        </div>
        <div class="category-card" data-category="cigarettes">
            <div class="category-icon">${categoryMeta.cigarettes.icon}</div>
            <h2 class="category-name">${categoryMeta.cigarettes.name}</h2>
            
            <p class="category-tagline">${categoryMeta.cigarettes.tagline}</p>
        </div>
    `;
    
    attachCategoryCardListeners();
}

function attachCategoryCardListeners() {
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            if (category === 'cigarettes') {
                navigateToItems('cigarettes', 'cigarettes');
            } else {
                navigateToCategory(category);
            }
        });
    });
}

// Render Category Page (Subcategories)
function renderCategoryPage() {
    categoryTitle.textContent = categoryMeta[currentCategory].name.charAt(0) + 
                                categoryMeta[currentCategory].name.slice(1).toLowerCase() + ' Menu';
    
    const searchQuery = categorySearchInput.value.toLowerCase();
    const data = currentCategory === 'drinks' ? menuData.drinks : menuData.food;
    let html = '';
    
    Object.keys(data).forEach(subcat => {
        const items = data[subcat];
        
        // Filter if searching
        let filteredItems = items;
        if (searchQuery) {
            filteredItems = items.filter(item => 
                item.name.toLowerCase().includes(searchQuery) ||
                (item.category && item.category.toLowerCase().includes(searchQuery))
            );
        }
        
        if (!searchQuery || filteredItems.length > 0) {
            const displayName = formatSubcategoryName(subcat);
            const icon = getSubcategoryIcon(subcat);
            
            html += `
                <div class="subcategory-card" data-category="${currentCategory}" data-subcat="${subcat}">
                    <div class="subcategory-icon">${icon}</div>
                    <h3 class="subcategory-name">${displayName}</h3>
                   
                </div>
            `;
        }
    });
    
    if (html === '') {
        html = '<div class="empty-state"><div class="empty-state-icon">🔍</div><div class="empty-state-text">No items found</div></div>';
    }
    
    categoryGrid.innerHTML = html;
    attachSubcategoryCardListeners();
}

function attachSubcategoryCardListeners() {
    document.querySelectorAll('.subcategory-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            const subcat = card.dataset.subcat;
            navigateToItems(category, subcat);
        });
    });
}

// Render Items Page
function renderItemsPage() {
    const displayName = formatSubcategoryName(currentSubcategory);
    itemsTitle.textContent = displayName;
    
    const searchQuery = itemsSearchInput.value.toLowerCase();
    let items = [];
    
    if (currentCategory === 'cigarettes') {
        items = menuData.cigarettes;
    } else if (currentCategory === 'drinks') {
        items = menuData.drinks[currentSubcategory];
    } else if (currentCategory === 'food') {
        items = menuData.food[currentSubcategory];
    }
    
    // Filter if searching
    if (searchQuery) {
        items = items.filter(item => 
            item.name.toLowerCase().includes(searchQuery) ||
            (item.category && item.category.toLowerCase().includes(searchQuery))
        );
    }
    
    if (items.length === 0) {
        itemsGrid.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🔍</div><div class="empty-state-text">No items found</div></div>';
    } else {
        itemsGrid.innerHTML = items.map(item => 
            createItemCardHTML(item, currentCategory, currentSubcategory)
        ).join('');
        attachItemCardListeners();
    }
}

// Search Handlers
function handleHomeSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    
    if (!query) {
        homeContent.style.display = 'grid';
        searchResults.style.display = 'none';
        return;
    }
    
    homeContent.style.display = 'none';
    searchResults.style.display = 'block';
    
    const results = [];
    
    // Search drinks
    Object.keys(menuData.drinks).forEach(subcat => {
        menuData.drinks[subcat].forEach(item => {
            if (item.name.toLowerCase().includes(query) ||
                (item.category && item.category.toLowerCase().includes(query))) {
                results.push({ item, category: 'drinks', subcat });
            }
        });
    });
    
    // Search food
    Object.keys(menuData.food).forEach(subcat => {
        menuData.food[subcat].forEach(item => {
            if (item.name.toLowerCase().includes(query) ||
                (item.category && item.category.toLowerCase().includes(query))) {
                results.push({ item, category: 'food', subcat });
            }
        });
    });
    
    // Search cigarettes
    menuData.cigarettes.forEach(item => {
        if (item.name.toLowerCase().includes(query)) {
            results.push({ item, category: 'cigarettes', subcat: 'cigarettes' });
        }
    });
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🔍</div><div class="empty-state-text">No items found</div></div>';
    } else {
        searchResults.innerHTML = '<div class="items-grid">' + 
            results.map(r => createItemCardHTML(r.item, r.category, r.subcat)).join('') + 
            '</div>';
        attachItemCardListeners();
    }
}

function handleCategorySearch() {
    renderCategoryPage();
}

function handleItemsSearch() {
    renderItemsPage();
}

function formatSubcategoryName(subcat) {
    const names = {
        whisky: 'Whisky',
        rum: 'Rum',
        vodka: 'Vodka',
        scotch: 'Scotch',
        beer: 'Beer',
        gin: 'Gin',
        wine: 'Wine',
        beverages: 'Beverages',
        tandoori: 'Tandoori',
        starters: 'Starters',
        biryani: 'Biryani',
        main_course: 'Main Course',
        chinese: 'Chinese',
        breads: 'Breads',
        rice: 'Rice'
    };
    return names[subcat] || subcat;
}

function createItemCardHTML(item, category, subcat = null) {
    const icon = getItemIcon(category, subcat);
    const pricingHTML = generatePricingHTML(item);
    
    return `
        <div class="item-card" data-item='${JSON.stringify(item).replace(/'/g, "&apos;")}' data-category="${category}" data-subcat="${subcat || category}">
            <div class="item-icon">${icon}</div>
            <h3 class="item-name">${item.name}</h3>
            ${item.category ? `<p class="item-type">${item.category}</p>` : ''}
            ${pricingHTML}
        </div>
    `;
}

function generatePricingHTML(item) {
    if (item.ml30 !== undefined) {
        return `
            <div class="pricing-grid">
                <div class="pricing-item"><span class="pricing-label">30ml</span><span class="pricing-value">₹${item.ml30}</span></div>
                <div class="pricing-item"><span class="pricing-label">60ml</span><span class="pricing-value">₹${item.ml60}</span></div>
                <div class="pricing-item"><span class="pricing-label">90ml</span><span class="pricing-value">₹${item.ml90}</span></div>
                <div class="pricing-item"><span class="pricing-label">Nip</span><span class="pricing-value">₹${item.nip}</span></div>
            </div>
        `;
    } else if (item.pint !== undefined || item.full !== undefined || item.bottle !== undefined || item.tower !== undefined) {
        let html = '<div class="pricing-grid">';
        if (item.pint) html += `<div class="pricing-item"><span class="pricing-label">Pint</span><span class="pricing-value">₹${item.pint}</span></div>`;
        if (item.full) html += `<div class="pricing-item"><span class="pricing-label">Full</span><span class="pricing-value">₹${item.full}</span></div>`;
        if (item.bottle) html += `<div class="pricing-item"><span class="pricing-label">Bottle</span><span class="pricing-value">₹${item.bottle}</span></div>`;
        if (item.tower) html += `<div class="pricing-item"><span class="pricing-label">Tower</span><span class="pricing-value">₹${item.tower}</span></div>`;
        html += '</div>';
        return html;
    } else if (item.half !== undefined) {
        return `
            <div class="pricing-grid">
                <div class="pricing-item"><span class="pricing-label">Half</span><span class="pricing-value">₹${item.half}</span></div>
                <div class="pricing-item"><span class="pricing-label">Full</span><span class="pricing-value">₹${item.full}</span></div>
            </div>
        `;
    } else if (item.port !== undefined) {
        return `<div class="pricing-grid"><div class="pricing-item"><span class="pricing-label">Port</span><span class="pricing-value">₹${item.port}</span></div></div>`;
    } else if (item.single !== undefined) {
        let html = '<div class="pricing-grid">';
        if (item.single) html += `<div class="pricing-item"><span class="pricing-label">Single</span><span class="pricing-value">₹${item.single}</span></div>`;
        if (item.packet) html += `<div class="pricing-item"><span class="pricing-label">Packet</span><span class="pricing-value">₹${item.packet}</span></div>`;
        if (item.carton) html += `<div class="pricing-item"><span class="pricing-label">Carton</span><span class="pricing-value">₹${item.carton}</span></div>`;
        html += '</div>';
        return html;
    } else if (item.price !== undefined) {
        return `<div class="pricing-grid"><div class="pricing-item"><span class="pricing-label">Price</span><span class="pricing-value">₹${item.price}</span></div></div>`;
    }
    return '';
}

function getItemIcon(category, subcat) {
    const icons = {
        whisky: '🥃',
        rum: '🍹',
        vodka: '🍸',
        scotch: '🥃',
        beer: '🍺',
        gin: '🍸',
        wine: '🍷',
        beverages: '🥤',
        tandoori: '🍗',
        starters: '🍤',
        biryani: '🍛',
        main_course: '🍲',
        chinese: '🍜',
        breads: '🥖',
        rice: '🍚',
        cigarettes: '🚬'
    };
    return icons[subcat] || icons[category] || '🍽️';
}

function createItemCardHTML(item, category, subcat = null) {
    const icon = getItemIcon(category, subcat);
    const pricingHTML = generatePricingHTML(item);
    
    return `
        <div class="item-card" data-item='${JSON.stringify(item).replace(/'/g, "&apos;")}' data-category="${category}" data-subcat="${subcat || category}">
            <div class="item-icon">${icon}</div>
            <h3 class="item-name">${item.name}</h3>
            ${item.category ? `<p class="item-type">${item.category}</p>` : ''}
            ${pricingHTML}
        </div>
    `;
}

function generatePricingHTML(item) {
    if (item.ml30 !== undefined) {
        return `
            <div class="pricing-grid">
                <div class="pricing-item"><span class="pricing-label">30ml</span><span class="pricing-value">₹${item.ml30}</span></div>
                <div class="pricing-item"><span class="pricing-label">60ml</span><span class="pricing-value">₹${item.ml60}</span></div>
                <div class="pricing-item"><span class="pricing-label">90ml</span><span class="pricing-value">₹${item.ml90}</span></div>
                <div class="pricing-item"><span class="pricing-label">Nip</span><span class="pricing-value">₹${item.nip}</span></div>
            </div>
        `;
    } else if (item.pint !== undefined || item.full !== undefined || item.bottle !== undefined || item.tower !== undefined) {
        let html = '<div class="pricing-grid">';
        if (item.pint) html += `<div class="pricing-item"><span class="pricing-label">Pint</span><span class="pricing-value">₹${item.pint}</span></div>`;
        if (item.full) html += `<div class="pricing-item"><span class="pricing-label">Full</span><span class="pricing-value">₹${item.full}</span></div>`;
        if (item.bottle) html += `<div class="pricing-item"><span class="pricing-label">Bottle</span><span class="pricing-value">₹${item.bottle}</span></div>`;
        if (item.tower) html += `<div class="pricing-item"><span class="pricing-label">Tower</span><span class="pricing-value">₹${item.tower}</span></div>`;
        html += '</div>';
        return html;
    } else if (item.half !== undefined) {
        return `
            <div class="pricing-grid">
                <div class="pricing-item"><span class="pricing-label">Half</span><span class="pricing-value">₹${item.half}</span></div>
                <div class="pricing-item"><span class="pricing-label">Full</span><span class="pricing-value">₹${item.full}</span></div>
            </div>
        `;
    } else if (item.port !== undefined) {
        return `<div class="pricing-grid"><div class="pricing-item"><span class="pricing-label">Port</span><span class="pricing-value">₹${item.port}</span></div></div>`;
    } else if (item.single !== undefined) {
        let html = '<div class="pricing-grid">';
        if (item.single) html += `<div class="pricing-item"><span class="pricing-label">Single</span><span class="pricing-value">₹${item.single}</span></div>`;
        if (item.packet) html += `<div class="pricing-item"><span class="pricing-label">Packet</span><span class="pricing-value">₹${item.packet}</span></div>`;
        if (item.carton) html += `<div class="pricing-item"><span class="pricing-label">Carton</span><span class="pricing-value">₹${item.carton}</span></div>`;
        html += '</div>';
        return html;
    } else if (item.price !== undefined) {
        return `<div class="pricing-grid"><div class="pricing-item"><span class="pricing-label">Price</span><span class="pricing-value">₹${item.price}</span></div></div>`;
    }
    return '';
}

// Attach Item Card Listeners
function attachItemCardListeners() {
    document.querySelectorAll('.item-card').forEach(card => {
        card.addEventListener('click', () => {
            const itemData = JSON.parse(card.dataset.item.replace(/&apos;/g, "'"));
            const category = card.dataset.category;
            const subcat = card.dataset.subcat;
            openModal(itemData, category, subcat);
        });
    });
}

// Helper: Get subcategory icon
function getSubcategoryIcon(subcat) {
    const icons = {
        whisky: '🥃',
        rum: '🍹',
        vodka: '🍸',
        scotch: '🥃',
        beer: '🍺',
        gin: '🍸',
        wine: '🍷',
        beverages: '🥤',
        tandoori: '🍗',
        starters: '🍤',
        biryani: '🍛',
        main_course: '🍲',
        chinese: '🍜',
        breads: '🥖',
        rice: '🍚'
    };
    return icons[subcat] || '🍽️';
}

// Helper: Format subcategory names
function formatSubcategoryName(subcat) {
    const names = {
        whisky: 'Whisky',
        rum: 'Rum',
        vodka: 'Vodka',
        scotch: 'Scotch',
        beer: 'Beer',
        gin: 'Gin',
        wine: 'Wine',
        beverages: 'Beverages',
        tandoori: 'Tandoori',
        starters: 'Starters',
        biryani: 'Biryani',
        main_course: 'Main Course',
        chinese: 'Chinese',
        breads: 'Breads',
        rice: 'Rice',
        cigarettes: 'Cigarettes'
    };
    return names[subcat] || subcat;
}

// Modal Functions
function openModal(item, category, subcat) {
    const icon = getItemIcon(category, subcat);
    const pricingHTML = generateModalPricingHTML(item);
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="modal-icon">${icon}</div>
        <h2 class="modal-title">${item.name}</h2>
        ${item.category ? `<p class="modal-type">${item.category}</p>` : ''}
        <div class="modal-pricing">
            <h3 class="pricing-title">Pricing</h3>
            <div class="pricing-table">
                ${pricingHTML}
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function generateModalPricingHTML(item) {
    let html = '';
    
    if (item.ml30 !== undefined) {
        html += `<div class="pricing-row"><span class="pricing-label">30ml</span><span class="pricing-value">₹${item.ml30}</span></div>`;
        html += `<div class="pricing-row"><span class="pricing-label">60ml</span><span class="pricing-value">₹${item.ml60}</span></div>`;
        html += `<div class="pricing-row"><span class="pricing-label">90ml</span><span class="pricing-value">₹${item.ml90}</span></div>`;
        html += `<div class="pricing-row"><span class="pricing-label">Nip</span><span class="pricing-value">₹${item.nip}</span></div>`;
    } else if (item.pint !== undefined || item.full !== undefined || item.bottle !== undefined || item.tower !== undefined) {
        if (item.pint) html += `<div class="pricing-row"><span class="pricing-label">Pint</span><span class="pricing-value">₹${item.pint}</span></div>`;
        if (item.full) html += `<div class="pricing-row"><span class="pricing-label">Full</span><span class="pricing-value">₹${item.full}</span></div>`;
        if (item.bottle) html += `<div class="pricing-row"><span class="pricing-label">Bottle</span><span class="pricing-value">₹${item.bottle}</span></div>`;
        if (item.tower) html += `<div class="pricing-row"><span class="pricing-label">Tower</span><span class="pricing-value">₹${item.tower}</span></div>`;
    } else if (item.half !== undefined) {
        html += `<div class="pricing-row"><span class="pricing-label">Half</span><span class="pricing-value">₹${item.half}</span></div>`;
        html += `<div class="pricing-row"><span class="pricing-label">Full</span><span class="pricing-value">₹${item.full}</span></div>`;
    } else if (item.port !== undefined) {
        html += `<div class="pricing-row"><span class="pricing-label">Port</span><span class="pricing-value">₹${item.port}</span></div>`;
    } else if (item.single !== undefined) {
        if (item.single) html += `<div class="pricing-row"><span class="pricing-label">Single</span><span class="pricing-value">₹${item.single}</span></div>`;
        if (item.packet) html += `<div class="pricing-row"><span class="pricing-label">Packet</span><span class="pricing-value">₹${item.packet}</span></div>`;
        if (item.carton) html += `<div class="pricing-row"><span class="pricing-label">Carton</span><span class="pricing-value">₹${item.carton}</span></div>`;
    } else if (item.price !== undefined) {
        html += `<div class="pricing-row"><span class="pricing-label">Price</span><span class="pricing-value">₹${item.price}</span></div>`;
    }
    
    return html;
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize on load
init();