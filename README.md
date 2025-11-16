# JALSA Menu - React App

A responsive React application for displaying the JALSA restaurant menu with drinks, food, and cigarettes.

## Features

- 🍽️ **Complete Menu Display**: Browse drinks, food, and cigarettes
- 🔍 **Search Functionality**: Search across all menu items
- 📱 **Fully Responsive**: Works on mobile, tablet, and desktop
- 🎨 **Beautiful UI**: Premium design with gold/cream theme
- ⚡ **Fast Performance**: Built with React and Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
React-Jalsa-Design-Second/
├── src/
│   ├── components/
│   │   ├── HomePage.jsx
│   │   ├── CategoryPage.jsx
│   │   ├── ItemsPage.jsx
│   │   ├── Modal.jsx
│   │   ├── ItemCard.jsx
│   │   └── SearchBar.jsx
│   ├── data/
│   │   └── menuData.js
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom design system

## Responsive Design

The app is fully responsive and works on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1280px+)

## Features Breakdown

### Home Page
- Main category cards (Drinks, Food, Cigarettes)
- Global search functionality
- Hero section with branding

### Category Page
- Subcategory navigation
- Search within category
- Back navigation

### Items Page
- Item cards with pricing
- Search within items
- Click to view details in modal

### Modal
- Detailed item information
- Complete pricing breakdown
- Easy close functionality

## Customization

### Adding New Items

Edit `src/data/menuData.js` to add new menu items.

### Styling

Main styles are in `src/index.css`. The design uses CSS custom properties for easy theming.

## License

This project is for internal use.

