import React from 'react'
import s from './skillsBlock.module.scss'

export const SkillsBlock=(props)=> {
    return (
        <div className={s.skillBlock}>
            <div className={s.skillBlockImg}>
                <img src={props.img}
                     alt={props.alt}
                     className={s.skillImg}/>
            </div>

            <h3>{props.title}</h3>
            <div className={s.skillBlockText}>
                <p>{props.description}</p>
            </div>
        </div>);
}

