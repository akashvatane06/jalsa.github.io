import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import ItemsPage from './components/ItemsPage';
import Modal from './components/Modal';
import { useSwipeGesture } from './hooks/useSwipeGesture';
import './App.css';

function App() {
    const [currentView, setCurrentView] = useState('home'); // 'home', 'category', 'items'
    const [currentCategory, setCurrentCategory] = useState(null);
    const [currentSubcategory, setCurrentSubcategory] = useState(null);
    const [searchQueries, setSearchQueries] = useState({
        home: '',
        category: '',
        items: ''
    });
    const [modalItem, setModalItem] = useState(null);
    const [modalCategory, setModalCategory] = useState(null);
    const [modalSubcat, setModalSubcat] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Helper function to update browser history
    const updateHistory = (view, category, subcategory, replace = false) => {
        const state = { view, category, subcategory };
        const url = view === 'home' 
            ? window.location.pathname 
            : view === 'category' 
                ? `${window.location.pathname}#/${category}`
                : `${window.location.pathname}#/${category}/${subcategory}`;
        
        if (replace) {
            window.history.replaceState(state, '', url);
        } else {
            window.history.pushState(state, '', url);
        }
    };

    // Parse URL hash to determine initial view (for deep linking and mobile navigation)
    const parseUrlHash = () => {
        const hash = window.location.hash;
        if (hash) {
            // Format: #/category or #/category/subcategory
            const parts = hash.replace('#/', '').split('/');
            if (parts.length === 2 && parts[0] && parts[1]) {
                // category/subcategory
                return { view: 'items', category: parts[0], subcategory: parts[1] };
            } else if (parts.length === 1 && parts[0]) {
                // category only
                return { view: 'category', category: parts[0], subcategory: null };
            }
        }
        return { view: 'home', category: null, subcategory: null };
    };

    // Initialize browser history on mount
    useEffect(() => {
        // Parse initial URL for deep linking (mobile and desktop)
        const initialState = parseUrlHash();
        
        // Set initial state from URL
        if (initialState.view !== 'home') {
            setCurrentView(initialState.view);
            setCurrentCategory(initialState.category);
            setCurrentSubcategory(initialState.subcategory);
        }
        
        // Push initial state to history (replace to avoid adding to history stack)
        window.history.replaceState(
            { 
                view: initialState.view, 
                category: initialState.category, 
                subcategory: initialState.subcategory 
            }, 
            '', 
            initialState.view === 'home' 
                ? window.location.pathname 
                : initialState.view === 'category'
                    ? `${window.location.pathname}#/${initialState.category}`
                    : `${window.location.pathname}#/${initialState.category}/${initialState.subcategory}`
        );
        
        // Listen for browser back/forward buttons (works on both desktop and mobile)
        const handlePopState = (event) => {
            if (event.state) {
                const { view, category, subcategory, modal } = event.state;
                
                // Handle modal state - if previous state had modal, close it
                if (modal === undefined && isModalOpen) {
                    // Coming back from modal - close it
                    setIsModalOpen(false);
                    setModalItem(null);
                    document.body.style.overflow = '';
                }
                
                // Update view state if view exists
                if (view) {
                    setCurrentView(view);
                    setCurrentCategory(category);
                    setCurrentSubcategory(subcategory);
                }
            } else {
                // Fallback: parse current URL hash
                const fallbackState = parseUrlHash();
                setCurrentView(fallbackState.view);
                setCurrentCategory(fallbackState.category);
                setCurrentSubcategory(fallbackState.subcategory);
            }
        };

        // Also listen for hash changes (for mobile browser compatibility)
        const handleHashChange = () => {
            const hashState = parseUrlHash();
            setCurrentView(hashState.view);
            setCurrentCategory(hashState.category);
            setCurrentSubcategory(hashState.subcategory);
            // Update history state to match
            window.history.replaceState(
                { view: hashState.view, category: hashState.category, subcategory: hashState.subcategory },
                '',
                window.location.href
            );
        };

        window.addEventListener('popstate', handlePopState);
        window.addEventListener('hashchange', handleHashChange);
        
        return () => {
            window.removeEventListener('popstate', handlePopState);
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [isModalOpen]);

    const navigateToHome = (pushHistory = true) => {
        setCurrentView('home');
        setCurrentCategory(null);
        setCurrentSubcategory(null);
        setSearchQueries({ home: '', category: '', items: '' });
        if (pushHistory) {
            updateHistory('home', null, null);
        }
    };

    const navigateToCategory = (category, pushHistory = true) => {
        setCurrentView('category');
        setCurrentCategory(category);
        setCurrentSubcategory(null);
        setSearchQueries(prev => ({ ...prev, category: '' }));
        if (pushHistory) {
            updateHistory('category', category, null);
        }
    };

    const navigateToItems = (category, subcategory, pushHistory = true) => {
        setCurrentView('items');
        setCurrentCategory(category);
        setCurrentSubcategory(subcategory);
        setSearchQueries(prev => ({ ...prev, items: '' }));
        if (pushHistory) {
            updateHistory('items', category, subcategory);
        }
    };

    const navigateBack = () => {
        // Use browser back button instead of manual navigation
        window.history.back();
    };

    const openModal = (item, category, subcat) => {
        setModalItem(item);
        setModalCategory(category);
        setModalSubcat(subcat);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
        // Push state for modal (optional - allows back button to close modal)
        window.history.pushState({ view: currentView, category: currentCategory, subcategory: currentSubcategory, modal: true }, '');
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalItem(null);
        document.body.style.overflow = '';
        // If we're in a modal state, go back
        if (window.history.state?.modal) {
            window.history.back();
        }
    };

    const handleSearchChange = (view, value) => {
        setSearchQueries(prev => ({ ...prev, [view]: value }));
    };

    // Mobile swipe gesture support
    // Swipe left to go back, swipe right to go forward (if available)
    const handleSwipeLeft = () => {
        // Only allow swipe back if not on home page
        if (currentView !== 'home') {
            navigateBack();
        }
    };

    const handleSwipeRight = () => {
        // Swipe right to go forward (if history allows)
        if (window.history.length > 1) {
            window.history.forward();
        }
    };

    // Apply swipe gestures to the app container
    const swipeRef = useSwipeGesture(
        handleSwipeLeft,
        handleSwipeRight,
        {
            threshold: 50, // Minimum 50px swipe
            maxVerticalDistance: 100, // Allow some vertical movement
            preventDefault: true, // Prevent scrolling during horizontal swipe
            enabled: true
        }
    );

    return (
        <div className="App" ref={swipeRef}>
            {currentView === 'home' && (
                <HomePage
                    onNavigateToCategory={navigateToCategory}
                    onNavigateToItems={navigateToItems}
                    onOpenModal={openModal}
                />
            )}

            {currentView === 'category' && currentCategory && (
                <CategoryPage
                    category={currentCategory}
                    onNavigateBack={navigateToHome}
                    onNavigateToItems={navigateToItems}
                    searchQuery={searchQueries.category}
                    onSearchChange={(value) => handleSearchChange('category', value)}
                />
            )}

            {currentView === 'items' && currentCategory && currentSubcategory && (
                <ItemsPage
                    category={currentCategory}
                    subcategory={currentSubcategory}
                    onNavigateBack={navigateBack}
                    onOpenModal={openModal}
                    searchQuery={searchQueries.items}
                    onSearchChange={(value) => handleSearchChange('items', value)}
                />
            )}

            <Modal
                item={modalItem}
                category={modalCategory}
                subcat={modalSubcat}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </div>
    );
}

export default App;

