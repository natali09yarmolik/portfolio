import React from 'react'
import s from './mainText.module.scss';
import ReactTypingEffect from 'react-typing-effect'

export const MainText = () => {
    return (
        <div className={s.mainText}>
            <span className={s.mainTextHello}>HELLO! I'm</span>
            <h1 className={s.mainTextName}>Natalij Yarmolik</h1>
            <div className={s.mainTextTyping}>
                <ReactTypingEffect text={'I\'m frontend developer'}
                                   speed={100}/>
            </div>
        </div>
    );
}

