import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='mainDiv'>
            <nav className='title'>
                <a href="/Home">Teachers.com</a>
                <p>Hire Your Favorite Teachers</p>
            </nav>
            <nav className='nav-item'>
                <a href="/Home">Home</a>
                <a href="/teachers">Our Teachers</a>
                <a href="/about">About</a>
            </nav>

            <nav>
                <div className='child'>
                    <h2>Total Budget: 500k</h2>
                    <p>Habibor Rahaman</p>
                </div>
            </nav>
        </div>
    );
};

export default Header;