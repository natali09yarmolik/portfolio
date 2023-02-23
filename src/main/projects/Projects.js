import React from 'react'
import s from './projects.module.scss';
import counter from '../../image/counter.jpg'
import travel from '../../image/Travel.jpg'
import style from '../../container.module.scss'
import {ProjectBlock} from "./ProjectBlock";

export const Projects=()=> {
    return (
        <div className={s.projects}>
            <div className={`${style.container} ${s.projectsBlock}`}>
                <h2>MY PROJECTS</h2>
                <div className={s.project}>
                    <ProjectBlock
                        linkProject={'https://github.com/natali09yarmolik/counter_tuesday'}
                        img={counter}
                        alt={'counter'}
                        title={'Counter'}
                        description={'The user enters the minimum and ' +
                            'maximum values, presses the "set" button and increases ' +
                            'the value of the number by pressing the "inc" button to the maximum.'}
                    />
                    <ProjectBlock
                        linkProject={'https://github.com/natali09yarmolik/traval'}
                        img={travel}
                        alt={'travel'}
                        title={'Travel'}
                        description={'Travel Website'}
                    />
                </div>
                <div className={'project-btn-block'}>

                </div>
            </div>
        </div>
    );
}

