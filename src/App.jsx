import React, { useState } from 'react';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import ItemsPage from './components/ItemsPage';
import Modal from './components/Modal';
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

    const navigateToHome = () => {
        setCurrentView('home');
        setCurrentCategory(null);
        setCurrentSubcategory(null);
        setSearchQueries({ home: '', category: '', items: '' });
    };

    const navigateToCategory = (category) => {
        setCurrentView('category');
        setCurrentCategory(category);
        setCurrentSubcategory(null);
        setSearchQueries(prev => ({ ...prev, category: '' }));
    };

    const navigateToItems = (category, subcategory) => {
        setCurrentView('items');
        setCurrentCategory(category);
        setCurrentSubcategory(subcategory);
        setSearchQueries(prev => ({ ...prev, items: '' }));
    };

    const navigateBack = () => {
        if (currentView === 'items') {
            // For cigarettes, go directly to home (skip category page)
            if (currentCategory === 'cigarettes') {
                navigateToHome();
            } else {
                setCurrentView('category');
                setCurrentSubcategory(null);
                setSearchQueries(prev => ({ ...prev, items: '' }));
            }
        } else if (currentView === 'category') {
            navigateToHome();
        }
    };

    const openModal = (item, category, subcat) => {
        setModalItem(item);
        setModalCategory(category);
        setModalSubcat(subcat);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalItem(null);
        document.body.style.overflow = '';
    };

    const handleSearchChange = (view, value) => {
        setSearchQueries(prev => ({ ...prev, [view]: value }));
    };

    return (
        <div className="App">
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

