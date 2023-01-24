import React from 'react'
import s from './distant.module.css'
import style from '../../container.module.css'

export const Distant=()=> {
    return (
        <div className={s.distant}>
           <div className={style.container}>
               <div className={s.distantBlock}>
                   <span>Consider all the variants of remote work</span>
                   <button>Hire me</button>
               </div>

           </div>
        </div>);
}

