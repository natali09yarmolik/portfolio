import React from 'react'
import s from './skills.module.scss';
import reactPic from '../../image/react.jpg'
import css from '../../image/css3.jpg'
import html from '../../image/html.png'
import figma from '../../image/figma.webp'
import typeScript from '../../image/typescript.png'
import redux from '../../image/redux.svg'
import {SkillsBlock} from "./SkillsBlock";
import style from '../../container.module.scss'

export const Skills=()=> {
    return (
        <div id={'id-skills'} className={s.skills}>
            <div className={`${style.container} ${s.skillsBlock}`}>
                <h2>MY SKILLS</h2>
                <div className={s.skill}>
                    <SkillsBlock
                        img={reactPic}
                        alt={'reactPic'}
                        title={'REACT'}
                        description={'Application development using React'}
                    />
                    <SkillsBlock
                        img={redux}
                        alt={'reduxPic'}
                        title={'REDUX'}
                        description={'Application development using Redux'}
                    />
                    <SkillsBlock
                        img={typeScript}
                        alt={'typePic'}
                        title={'Type Script'}
                        description={'Application development using Type Script'}
                    />
                    <SkillsBlock
                        img={html}
                        alt={'html'}
                        title={'HTML'}
                        description={'Basic knowledge of HTML'}
                    />
                    <SkillsBlock
                        img={css}
                        alt={'css'}
                        title={'CSS3'}
                        description={'Basic knowledge of CSS3'}
                    />
                    <SkillsBlock
                        img={figma}
                        alt={'figmaPic'}
                        title={'Figma'}
                        description={'Layout of projects based on layouts developed on Figma'}
                    />
                </div>
            </div>
        </div>
    );
}

