import React, { useEffect, useState } from "react";
import BookReview from './BookReview';

const BookList = ({ searchTerm, setError }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetchBooks = async () => {
            const url = "https://gutendex.com/books/";
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const bookInfo = await response.json();
                setBooks(bookInfo.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, [setError]);

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        setNotFound(searchTerm !== '' && filteredBooks.length === 0);
    }, [searchTerm, filteredBooks]);

    if (loading) return <p>Loading...</p>;
    if (notFound) return <p className="error">Book not found.</p>;

    return (
        <div className="grid-container">
            {filteredBooks.map((item) => (
                <div className="start" key={item.id}>
                    <p className="grid-item"><b>Name of book:</b> {item.title}</p>
                    <p className="grid-item"><b>Information:</b> {item.subjects}</p>

                    <BookReview bookId={item.id} />
                </div>
            ))}
        </div>
    );
};

export default BookList;
