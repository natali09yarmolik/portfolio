import React from 'react'
import s from './skillsBlock.module.css'

export const SkillsBlock=(props)=> {
    return (
        <div className={s.skillBlock}>
            <img src={props.img} alt={props.alt}/>
            <span>{props.title}</span>
            <div className={s.skillBlockText}>
                <p>{props.description}</p>
            </div>
        </div>);
}

