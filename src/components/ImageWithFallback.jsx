import React, { useState, useEffect } from 'react';
import { getGradientPlaceholder } from '../utils/imageUtils';

const ImageWithFallback = ({ 
    src, 
    alt, 
    className, 
    category = null, 
    subcategory = null,
    localPath = null,
    style = {} 
}) => {
    const [imageError, setImageError] = useState(false);
    const [imageSrc, setImageSrc] = useState(src);
    const [triedLocal, setTriedLocal] = useState(false);

    // Update imageSrc when src prop changes
    useEffect(() => {
        setImageSrc(src);
        setImageError(false);
        setTriedLocal(false);
    }, [src]);

    const handleError = () => {
        if (!imageError) {
            // First error - try local image if available
            if (localPath && !triedLocal) {
                setTriedLocal(true);
                setImageSrc(localPath);
                setImageError(false); // Reset error to try local image
            } else {
                // Both Pexels and local failed - use gradient
                setImageError(true);
                setImageSrc(null);
            }
        }
    };

    // If both Pexels and local images failed, use gradient background
    if (imageError || (!imageSrc && !localPath)) {
        const gradient = getGradientPlaceholder(category, subcategory);
        return (
            <div 
                className={className}
                style={{
                    ...style,
                    background: gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '14px',
                    fontWeight: '600'
                }}
            >
                {alt || 'Image'}
            </div>
        );
    }

    return (
        <img
            src={imageSrc || localPath}
            alt={alt}
            className={className}
            style={style}
            onError={handleError}
            loading="lazy"
            decoding="async"
            fetchpriority={src && src.includes('logo') ? 'high' : 'auto'}
        />
    );
};

export default ImageWithFallback;

