import React from 'react'
import s from './projects.module.scss';
import todo from '../../image/todo.png'
import travel from '../../image/Travel.jpg'
import cost from '../../image/cost.png'
import cards from '../../image/cards.png'
import style from '../../container.module.scss'
import {ProjectBlock} from "./ProjectBlock";

export const Projects=()=> {
    return (
        <div id={'id-projects'} className={s.projects}>
            <div className={`${style.container} ${s.projectsBlock}`}>
                <h2>MY PROJECTS</h2>
                <div className={s.project}>
                    <ProjectBlock
                        linkProject={'https://natali09yarmolik.github.io/test-Project-frame-calculation/'}
                        img={cost}
                        alt={'cost'}
                        title={'Calculation of the cost of the frame'}
                        description={'The user enters the parameters of the' +
                                     'frame and the program calculates the amount' +
                                     'of necessary material and its cost'}
                    />
                    <ProjectBlock
                        linkProject={'https://github.com/natali09yarmolik/counter_tuesday'}
                        img={todo}
                        alt={'todo'}
                        title={'Task execution notepad'}
                        description={'The user makes a list of tasks,' +
                            'that can be put in the completed state.'}
                    />
                    <ProjectBlock
                        linkProject={'https://github.com/natali09yarmolik/traval'}
                        img={travel}
                        alt={'travel'}
                        title={'Travel'}
                        description={'Travel Website'}
                    />
                    <ProjectBlock
                        linkProject={'https://natali09yarmolik.github.io/cards2/'}
                        img={cards}
                        alt={'cards'}
                        title={'Cards'}
                        description={'Application for creating training cards'}
                    />
                </div>
                <div className={'project-btn-block'}>

                </div>
            </div>
        </div>
    );
}

