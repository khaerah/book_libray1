import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import BookSearch from './components/BookSearch';
import NavBar from './components/NavBar';
import FeaturedBooks from './components/FeaturedBooks';
import axios from 'axios'; 
import './components/HomePage.css';
import './components/NavBar.css';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);
    const [showFeatured, setShowFeatured] = useState(false);
    const [featuredBooks, setFeaturedBooks] = useState([]); 

    const toggleFeaturedBooks = () => {
        setShowFeatured((prev) => !prev);
    };

    useEffect(() => {
        // Fetch books from API
        const fetchBooks = async () => {
            try {
                const response = await axios.get('https://gutendex.com/books/');
                console.log(response.data); 
                if (Array.isArray(response.data.results)) {
                    setFeaturedBooks(response.data.results);
                } else {
                    setError('No featured books found.');
                }
            } catch (err) {
                setError('Failed to fetch featured books.');
            }
        };

        fetchBooks(); 
    }, []);

    return (
        <div className="App">
            <NavBar toggleFeaturedBooks={toggleFeaturedBooks} />
            <header className="App-header">
                <h1 className='find'>Find Your Next Favorite Book Today!</h1>
                <p className='book'>Books are magic portals, transporting us to new worlds and igniting our imaginations.</p>
                <BookSearch
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    error={error}
                />
                {error && <p className="error">{error}</p>}
            </header>

            <main>
                {showFeatured && <FeaturedBooks books={featuredBooks} />}
                {searchTerm && (
                    <BookList searchTerm={searchTerm} setError={setError} />
                )}
            </main>
        </div>
    );
}

export default App;
