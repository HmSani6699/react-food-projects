import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header-container'>
            <h3 className='header-logo'><span className='author-logo'>Food</span> web</h3>
            <nav>
                <a href="/home">Home</a>
                <a href="/home">Abut us</a>
                <a href="/home">Blog</a>
                <a href="/home">Contact us</a>
            </nav>
        </div>
    );
};

export default Header;