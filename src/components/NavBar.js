import React, { useState } from 'react';
import './NavBar.css'; 


const NavBar = ({ toggleFeaturedBooks }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1 className='book'>My Books</h1>
            </div>
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <button onClick={toggleFeaturedBooks}>Featured Books</button>
            </div>
            <div className="menu-toggle" onClick={handleToggle}>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            </div>
        </nav>
    );
};

export default NavBar;
