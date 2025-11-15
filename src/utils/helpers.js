// Helper functions for formatting and icons

export function formatSubcategoryName(subcat) {
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
        roti: 'Roti',
        rice: 'Rice',
        cigarettes: 'Cigarettes'
    };
    return names[subcat] || subcat;
}

// export function getSubcategoryIcon(subcat) {
//     const icons = {
//         whisky: '🥃',
//         rum: '🍹',
//         vodka: '🍸',
//         scotch: '🥃',
//         beer: '🍺',
//         gin: '🍸',
//         wine: '🍷',
//         beverages: '🥤',
//         tandoori: '🍗',
//         starters: '🍤',
//         biryani: '🍛',
//         main_course: '🍲',
//         chinese: '🍜',
//         roti: '🥖',
//         rice: '🍚'
//     };
//     return icons[subcat] || '🍽️';
// }

// export function getItemIcon(category, subcat) {
//     const icons = {
//         whisky: '🥃',
//         rum: '🍹',
//         vodka: '🍸',
//         scotch: '🥃',
//         beer: '🍺',
//         gin: '🍸',
//         wine: '🍷',
//         beverages: '🥤',
//         tandoori: '🍗',
//         starters: '🍤',
//         biryani: '🍛',
//         main_course: '🍲',
//         chinese: '🍜',
//         roti: '🥖',
//         rice: '🍚',
//         cigarettes: '🚬'
//     };
//     return icons[subcat] || icons[category] || '🍽️';
// }

