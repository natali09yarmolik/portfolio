import React from 'react'
import s from './projectBlock.module.css'

export const ProjectBlock=(props)=> {
    return (
        <div className={s.projectBlock}>
           <a href={props.linkProject}>
               <img className={s.projectBlockIMG}
                    src={props.img}
                    alt={props.alt}/>
           </a>
            <span>{props.title}</span>
            <div className={s.projectBlockText}>
                <p>{props.description}</p>
            </div>
        </div>);
}

