import React from 'react'
import s from './navigation.module.scss';
import {LinkComponents} from "../../components/LinkComponents";

export const Navigation =()=> {
    return (
        <div className={s.navigation}>
            <LinkComponents activeClass = {s.active} element='id-main' title = 'Main'/>
            <LinkComponents activeClass = {s.active} element='id-skills' title = 'Skills'/>
            <LinkComponents activeClass = {s.active} element='id-projects' title = 'Projects'/>
            <LinkComponents activeClass = {s.active} element='id-contacts' title = 'Contacts'/>
        </div>
    );
}

