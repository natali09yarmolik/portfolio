import React from 'react'
import s from './projectBlock.module.scss'

export const ProjectBlock=(props)=> {
    return (
        <div className={s.projectBlock}>
            <div className={s.projectBlockIMG}>
                <img src={props.img}
                    alt={props.alt}
                     className={s.projectIMG}/>
                <div className={s.projectBlockButton}>
                    <a href={props.linkProject}
                       className={s.projectLink} >SHOW</a>
                </div>
            </div>

            <h3>{props.title}</h3>
            <div className={s.projectBlockText}>
                <p>{props.description}</p>
            </div>
        </div>);
}

