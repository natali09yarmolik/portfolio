import React from 'react'
import s from './navigation.module.scss';

function Navigation() {
    return (
        <div className={s.navigation}>
            <a href={'/'}>Main</a>
            <a href={'/'}>Skills</a>
            <a href={'/'}>Projects</a>
            <a href={'/'}>Contacts</a>
        </div>
    );
}

export default Navigation;