import React from 'react'
import s from './main.module.scss';
import {MainText} from "./Main-text";
import {MainPic} from "./Main-pic";
import style from '../container.module.scss'


export const Main=()=> {
    return (
        <div className={s.main}>
            <div className={`${style.container} ${s.mainBlock}`}>
                <MainText/>
                <MainPic/>
            </div>
        </div>
    );
}

