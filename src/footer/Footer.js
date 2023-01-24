import React from 'react'
import s from './main.module.css';
import {MainText} from "./Main-text";
import {MainPic} from "./Main-pic";
import style from '../container.module.css'


export const Main=()=> {
    return (
        <div className={s.main}>
            <div className={style.container}>
                <div className={s.mainBlock}>
                    <MainText/>
                    <MainPic/>
                </div>
        </div>
        </div>
    );
}

