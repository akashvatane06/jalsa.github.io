# Quick Start Guide

## Installation & Running

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

## What's Changed?

✅ **Converted to React** - All vanilla JavaScript converted to React components
✅ **Responsive Design** - Fully responsive across all devices
✅ **Component-Based** - Modular, reusable components
✅ **Modern React** - Uses React Hooks (useState, useMemo, useEffect)
✅ **Optimized** - Better performance with React's virtual DOM

## Project Structure

```
src/
├── components/        # React components
│   ├── HomePage.jsx   # Main landing page
│   ├── CategoryPage.jsx # Category/subcategory view
│   ├── ItemsPage.jsx   # Items list view
│   ├── Modal.jsx       # Item detail modal
│   ├── ItemCard.jsx    # Individual item card
│   └── SearchBar.jsx   # Search input component
├── data/
│   └── menuData.js    # Menu data structure
├── utils/
│   └── helpers.js     # Helper functions
├── App.jsx            # Main app component
├── main.jsx           # React entry point
└── index.css          # All styles
```

## Features

- 🏠 **Home Page**: Browse main categories
- 📂 **Category Page**: View subcategories
- 📋 **Items Page**: Browse items with pricing
- 🔍 **Search**: Search across all items
- 📱 **Responsive**: Works on all screen sizes
- 🎨 **Beautiful UI**: Premium design maintained

## Notes

- The old `app.js` file is still in the root but won't be used
- All styles are in `src/index.css`
- Menu data is in `src/data/menuData.js`

