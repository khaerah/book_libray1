import React from 'react';
import './BookSearch.css'; 

const BookSearch = ({ searchTerm, setSearchTerm, error }) => {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <button className="search-button">Search</button>
            {error && <span className="error">{error}</span>}
        </div>
    );
};

export default BookSearch;



