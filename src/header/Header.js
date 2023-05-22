import React from 'react'
import s from './header.module.scss';
import {BurgerNavigation} from "./burgerNavigation/burgerNavigation";
import {Navigation} from "./navigation/navigation";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.headerBlock}>
                <Navigation/>
                <BurgerNavigation/>
            </div>
        </div>
    );
}

