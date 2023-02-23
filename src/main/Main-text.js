import React from 'react'
import s from './mainText.module.scss';


export const MainText=()=> {
    return (
        <div className={s.mainText}>
            <span className={s.mainTextHello}>HELLO! I'm</span>
            <h1 className={s.mainTextName}>Natalij Yarmolik</h1>
            <h3>I'm frontend developer</h3>
            <p> I'm 37 years old. I'm from Mogilev (Belarus).</p>
            <p> I worked as a chief accountant, but I want to try my hand at
                programming, because I like it since my student days.</p>
            <p>I graduated from Belarusian - Russian University (Mogilev),
                speciality: economist-manager</p>
            <p>My level English is A2</p>
        </div>
    );
}

