import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import { ExpandMore, Language } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <img className="header__icon" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png" alt="airbnb logo" />

            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <Language />
                <ExpandMore />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
