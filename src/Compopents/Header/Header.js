import React from 'react';
import logo from '../../images/Logo.svg';
import "./Header.css";

const Header = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="" />
            <div>
                <a href="/shopping">Shopping</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;