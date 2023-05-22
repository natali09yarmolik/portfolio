import React, {useState} from 'react'
import s from './burgerNavigation.module.scss'
import {LinkComponents} from "../../components/LinkComponents";

export const BurgerNavigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClickButton = () => {
        setIsOpen(!isOpen)
    }
    const buttonClassName = isOpen
        ? s.burgerNavigationButtonClose
        : s.burgerNavigationButtonOpen
    const burgerItemsClassName = isOpen
        ? `${s.burgerNavigationItems} ${s.show}`
        : s.burgerNavigationItems

    return (
        <div className={s.burgerNavigation}>
            <div className={s.burgerNavigationButton}
                 onClick={handleClickButton}>
                <div className={buttonClassName}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={burgerItemsClassName} onClick={handleClickButton}>
                <LinkComponents activeClass = {s.active} element='id-main' title='Main' onClickLink={handleClickButton}/>
                <LinkComponents activeClass = {s.active} element='id-skills' title='Skills' onClickLink={handleClickButton}/>
                <LinkComponents activeClass = {s.active} element='id-projects' title='Projects' onClickLink={handleClickButton}/>
                <LinkComponents activeClass = {s.active} element='id-contacts' title='Contacts' onClickLink={handleClickButton}/>
            </div>
        </div>
    );
}

