import React from 'react'
import s from './skillsBlock.module.scss'

export const SkillsBlock=(props)=> {
    return (
        <div className={s.skillBlock}>
            <img src={props.img}
                 alt={props.alt}
                 className={s.skillBlockImg}/>
            <h3>{props.title}</h3>
            <div className={s.skillBlockText}>
                <p>{props.description}</p>
            </div>
        </div>);
}

