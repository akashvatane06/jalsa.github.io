# Image Guide for Food Subcategories

## Current Images
All images are from Pexels (copyright-free, commercial use allowed).

## Food Subcategory Images

### Tandoori
- **Current**: Grilled meat image
- **Description**: Shows grilled/kebab items
- **To change**: Replace the URL in `imageUtils.js` line 29

### Starters  
- **Current**: Food spread image
- **Description**: Appetizers and snacks
- **To change**: Replace the URL in `imageUtils.js` line 31

### Biryani
- **Current**: Food spread image  
- **Description**: Spiced rice dish
- **To change**: Replace the URL in `imageUtils.js` line 33

### Main Course
- **Current**: Food spread image
- **Description**: Curries and main dishes
- **To change**: Replace the URL in `imageUtils.js` line 35

### Chinese
- **Current**: Food spread image
- **Description**: Chinese cuisine (noodles, fried rice)
- **To change**: Replace the URL in `imageUtils.js` line 37

### Breads
- **Current**: Bread image ✅
- **Description**: Flatbreads (Naan, Roti, Paratha)
- **Status**: Already has appropriate image

### Rice
- **Current**: Food spread image
- **Description**: Rice dishes
- **To change**: Replace the URL in `imageUtils.js` line 41

## How to Update Images

1. Find copyright-free images from:
   - Pexels.com (recommended)
   - Pixabay.com
   - Unsplash.com

2. Copy the image URL

3. Update in `src/utils/imageUtils.js`:
   ```javascript
   subcategory: {
       tandoori: 'YOUR_NEW_IMAGE_URL_HERE',
       // ...
   }
   ```

## Recommended Image Search Terms for Pexels

- **Tandoori**: "grilled chicken", "kebab", "tandoor"
- **Starters**: "appetizers", "snacks", "finger food"
- **Biryani**: "biryani", "spiced rice", "rice dish"
- **Main Course**: "curry", "indian food", "gravy"
- **Chinese**: "chinese food", "noodles", "fried rice"
- **Rice**: "rice", "steamed rice", "basmati rice"

