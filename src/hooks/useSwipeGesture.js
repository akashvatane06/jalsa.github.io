import { useEffect, useRef } from 'react';

/**
 * Custom hook for swipe gesture detection on mobile devices
 * Supports swipe left (back) and swipe right (forward) gestures
 */
export const useSwipeGesture = (onSwipeLeft, onSwipeRight, options = {}) => {
    const touchStartX = useRef(null);
    const touchStartY = useRef(null);
    const elementRef = useRef(null);
    
    const {
        threshold = 50, // Minimum swipe distance in pixels
        maxVerticalDistance = 100, // Maximum vertical movement to consider it a horizontal swipe
        preventDefault = true,
        enabled = true
    } = options;

    useEffect(() => {
        if (!enabled) return;

        const element = elementRef.current || document.body;
        let touchStartTime = null;

        const handleTouchStart = (e) => {
            const touch = e.touches[0];
            touchStartX.current = touch.clientX;
            touchStartY.current = touch.clientY;
            touchStartTime = Date.now();
        };

        const handleTouchMove = (e) => {
            if (preventDefault && touchStartX.current !== null) {
                // Prevent scrolling during horizontal swipe
                const touch = e.touches[0];
                const deltaX = Math.abs(touch.clientX - touchStartX.current);
                const deltaY = Math.abs(touch.clientY - touchStartY.current);
                
                // If horizontal movement is greater than vertical, prevent default scrolling
                if (deltaX > deltaY && deltaX > 10) {
                    e.preventDefault();
                }
            }
        };

        const handleTouchEnd = (e) => {
            if (touchStartX.current === null || touchStartY.current === null) return;

            const touch = e.changedTouches[0];
            const deltaX = touch.clientX - touchStartX.current;
            const deltaY = touch.clientY - touchStartY.current;
            const deltaTime = Date.now() - touchStartTime;

            // Check if it's a horizontal swipe (not vertical scroll)
            if (Math.abs(deltaY) > maxVerticalDistance) {
                touchStartX.current = null;
                touchStartY.current = null;
                return;
            }

            // Check if swipe is significant enough and fast enough
            if (Math.abs(deltaX) > threshold && deltaTime < 500) {
                if (deltaX > 0 && onSwipeRight) {
                    // Swipe right (forward)
                    onSwipeRight();
                } else if (deltaX < 0 && onSwipeLeft) {
                    // Swipe left (back)
                    onSwipeLeft();
                }
            }

            touchStartX.current = null;
            touchStartY.current = null;
        };

        element.addEventListener('touchstart', handleTouchStart, { passive: false });
        element.addEventListener('touchmove', handleTouchMove, { passive: false });
        element.addEventListener('touchend', handleTouchEnd, { passive: true });

        return () => {
            element.removeEventListener('touchstart', handleTouchStart);
            element.removeEventListener('touchmove', handleTouchMove);
            element.removeEventListener('touchend', handleTouchEnd);
        };
    }, [onSwipeLeft, onSwipeRight, threshold, maxVerticalDistance, preventDefault, enabled]);

    return elementRef;
};

