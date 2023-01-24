import React from 'react'
import s from './skills.module.css';
import reactPic from '../../image/React-Typescript2.png'
import redux from '../../image/redux.jpg'
import material from '../../image/material.png'


export const Skills=()=> {
    return (
        <div className={s.skills}>
           <span>MY SKILLS</span>
            <div className={s.skillsBlock}>
                <div>
                    <img src={'reactPic'} alt={'react'}>
                        <span>REACT+TSX</span>
                        <p></p>
                </div>
                <div>
                    <img src={'redux'} alt={'redux'}>
                        <span>REDUX</span>
                        <p></p>
                </div>
                <div>
                    <img src={'material'} alt={'material'}>
                        <span>MATERIAL UI</span>
                        <p></p>
                </div>

            </div>


        </div>
    );
}

