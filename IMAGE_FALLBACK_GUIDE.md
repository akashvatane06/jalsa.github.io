# Image Fallback System Guide

## Overview
This project uses a **hybrid image system** that provides automatic fallback:
1. **Primary**: Pexels images (external URLs)
2. **Fallback**: Local images from project structure (if Pexels fails)
3. **Final Fallback**: Gradient placeholder (if both fail)

## How It Works

### Automatic Fallback Chain
When an image fails to load:
1. First tries **Pexels URL** (primary source)
2. If Pexels fails → automatically tries **local image** from `/public/images/`
3. If local image also fails → shows **gradient placeholder**

### Folder Structure
```
public/
  images/
    category/
      drinks.jpg
      food.jpg
      cigarettes.jpg
    subcategory/
      whisky.jpg
      rum.jpg
      vodka.jpg
      scotch.jpg
      beer.jpg
      gin.jpg
      wine.jpg
      beverages.jpg
      tandoori.jpg
      starters.jpg
      biryani.jpg
      main_course.jpg
      chinese.jpg
      breads.jpg
      rice.jpg
      cigarettes.jpg
```

## Setting Up Local Images

### Step 1: Download Images
Download the same images from Pexels (or use your own images) and save them locally.

### Step 2: Save to Correct Folders
- **Category images**: Save to `public/images/category/`
  - `drinks.jpg` - Main drinks category image
  - `food.jpg` - Main food category image
  - `cigarettes.jpg` - Main cigarettes category image

- **Subcategory images**: Save to `public/images/subcategory/`
  - `whisky.jpg`, `rum.jpg`, `vodka.jpg`, etc.

### Step 3: Image Naming
**Important**: File names must match exactly:
- Use lowercase
- Use underscores for multi-word names (e.g., `main_course.jpg`)
- Use `.jpg` extension (or `.png`, `.webp` - but update code if needed)

### Step 4: Image Sources
You can download the same images from these Pexels URLs:

**Category Images:**
- Drinks: https://images.pexels.com/photos/340996/pexels-photo-340996.jpeg
- Food: https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg
- Cigarettes: Use the Adobe Stock image or find alternative

**Subcategory Images:**
- Whisky: https://images.pexels.com/photos/301692/pexels-photo-301692.jpeg
- Rum: https://images.pexels.com/photos/14516855/pexels-photo-14516855.jpeg
- Vodka: https://images.pexels.com/photos/19589632/pexels-photo-19589632.jpeg
- Scotch: https://images.pexels.com/photos/13947435/pexels-photo-13947435.jpeg
- Beer: https://images.pexels.com/photos/19615606/pexels-photo-19615606.jpeg
- Gin: https://images.pexels.com/photos/25823021/pexels-photo-25823021.jpeg
- Wine: https://images.pexels.com/photos/8775388/pexels-photo-8775388.jpeg
- Beverages: https://images.pexels.com/photos/4113666/pexels-photo-4113666.jpeg
- Tandoori: https://images.pexels.com/photos/31771054/pexels-photo-31771054.jpeg
- Starters: https://images.pexels.com/photos/6646101/pexels-photo-6646101.jpeg
- Biryani: https://images.pexels.com/photos/17649369/pexels-photo-17649369.jpeg
- Main Course: https://images.pexels.com/photos/6066052/pexels-photo-6066052.jpeg
- Chinese: https://images.pexels.com/photos/5409020/pexels-photo-5409020.jpeg
- Breads: https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg
- Rice: https://images.pexels.com/photos/31860143/pexels-photo-31860143.jpeg

## Benefits

✅ **Best of Both Worlds**:
- Uses Pexels when available (no storage needed)
- Automatically falls back to local images if Pexels is down
- No code changes needed - works automatically

✅ **Reliability**:
- Your app works even if Pexels server is down
- Images won't break if Pexels removes images
- Offline capability (if images are cached)

✅ **Performance**:
- Local images load faster (no external requests)
- Reduced dependency on external services

## Testing the Fallback

To test if local images work:
1. Add images to `public/images/` folders
2. Temporarily break Pexels URLs in `imageUtils.js` (add invalid characters)
3. Run the app - it should automatically use local images
4. Restore Pexels URLs

## Notes

- Images in `public/` folder are served directly by Vite
- No need to import images - just reference by path (e.g., `/images/category/drinks.jpg`)
- The `ImageWithFallback` component handles all the fallback logic automatically
- All components (HomePage, CategoryPage, ItemCard, Modal) use this system

