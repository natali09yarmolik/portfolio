import React from 'react'
import s from './header.module.scss';
import style from '../container.module.scss'
import Navigation from "./navigation";


function Header() {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <Navigation/>
            </div>

        </div>
    );
}

export default Header;