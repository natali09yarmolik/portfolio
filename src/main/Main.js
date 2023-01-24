import React from 'react'
import s from './header.module.css';
import Navigation from "./navigation";

function Header() {
    return (
        <div className={s.header}>
            <Navigation/>
        </div>
    );
}

export default Header;