import React from 'react'
import s from './main.module.css';
import {MainText} from "./Main-text";
import {MainPic} from "./Main-pic";


export const Main=()=> {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <MainText/>
                <MainPic/>
            </div>

        </div>
    );
}

