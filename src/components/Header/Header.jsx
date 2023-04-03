import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <ActiveLink to ="/">Home</ActiveLink>
            <ActiveLink to ="/friends">Friends</ActiveLink>
            <ActiveLink to ="/posts">Posts</ActiveLink>
            <ActiveLink to ="/about">About</ActiveLink>
            <Link to ="/contact">Contact</Link>
        </nav>
    );
};

export default Header;