import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <div >
            <div className='header-container'>
                <h3 className='header-logo'><span className='author-logo'>Food</span> web</h3>
                <nav>
                    <a href="/home">Home</a>
                    <a href="/home">Abut us</a>
                    <a href="/home">Blog</a>
                    <a href="/home">Contact us</a>
                </nav>
            </div>
            <div className='author-menu'>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    );
};

export default Header;