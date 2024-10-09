// FeaturedBooks.js
import React from 'react';
import './FeaturedBooks.css'; // Make sure to import your CSS

const FeaturedBooks = ({ books }) => {
    if (!Array.isArray(books) || books.length === 0) {
        return <p>No featured books available.</p>; 
    }

    return (
        <div className="featured-books">
            <h2>Featured Books</h2>
            <h4>Here are the featured books available:</h4>
            <ul className="books-list">
                {books.map((book) => (
                    <li key={book.id} className="featured">
                        <h3>{book.title}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeaturedBooks;
