import React from 'react'
import s from './footer.module.scss'
import style from '../container.module.scss'
import telegram from '../image/telegram.png'
import gitHub from '../image/git-hub.png'
import mail from '../image/mail.png'
import phone from '../image/telephone.png'
import Fade from 'react-reveal/Fade';

export const Footer=()=> {
    return (
        <div className={s.footer}>
            <div className={`${style.container} ${s.footerBlock}`}>
                <Fade top cascade>
                <ul className={s.footerIcons}>
                    <li><img src={mail} alt={"mail"} className={s.footerIconsIMG}/>n-bozh@mail.ru</li>
                    <li><img src={telegram} alt={"telegram"} className={s.footerIconsIMG}/>Наталья Ярмолик</li>
                    <li><img src={phone} alt={"telephone"} className={s.footerIconsIMG}/>+375 44 784 48 74</li>
                    <li><a href={'https://github.com/natali09yarmolik'}><img src={gitHub} alt={"gitHub"} className={s.footerIconsIMG}/>natali09yarmolik</a></li>
                </ul>
                </Fade>

                <span className={s.footerBlockSpan}>All Rights Reserved</span>
            </div>
        </div>
    );
}

