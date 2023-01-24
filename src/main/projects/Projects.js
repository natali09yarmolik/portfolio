import React from 'react'
import s from './progects.module.css';

import style from '../../container.module.css'

export const Progects=()=> {
    return (
        <div className={s.progects}>
            <div className={style.container}>
                <div className={s.skillsBlock}>
                    <h2>MY SKILLS</h2>
                    <div className={s.skill}>
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
                            img={reactPic}
                            alt={'reactPic'}
                            title={'REACT'}
                            description={'Application development using React'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

