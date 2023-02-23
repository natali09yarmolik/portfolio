import React from 'react'
import s from './footer.module.scss'
import style from '../container.module.scss'
import telegram from '../image/i.webp'
import gitHub from '../image/gitHub.webp'
import mail from '../image/mail.webp'
import phone from '../image/phone.webp'


export const Footer=()=> {
    return (
        <div className={s.footer}>
            <div className={`${style.container} ${s.footerBlock}`}>
                <ul className={s.footerIcons}>
                    <li><img src={mail} alt={"mail"} className={s.footerIconsIMG}/>n-bozh@mail.ru</li>
                    <li><img src={telegram} alt={"telegram"} className={s.footerIconsIMG}/>Наталья Ярмолик</li>
                    <li><img src={phone} alt={"telephone"} className={s.footerIconsIMG}/>+375 44 784 48 74</li>
                    <li><img src={gitHub} alt={"gitHub"} className={s.footerIconsIMG}/>natali09yarmolik</li>
                </ul>
                <span className={s.footerBlockSpan}>All Rights Reserved</span>
            </div>
        </div>
    );
}

