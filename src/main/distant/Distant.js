import React from 'react'
import s from './distant.module.scss'
import style from '../../container.module.scss'

export const Distant=()=> {
    return (
        <div className={s.distant}>
           <div className={`${style.container} ${s.distantBlock}`}>
                   <h2>Consider all the variants of remote work</h2>
                   <button>Hire me</button>
           </div>
        </div>);
}

