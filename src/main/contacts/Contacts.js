import React from 'react'
import s from './contacts.module.scss'
import style from '../../container.module.scss'
import emailjs from "emailjs-com";

export const Contacts=()=> {
    const sentEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('VVmlYXN30tWg6SLEB', 'template_mikv1ru', e.target, 'VVmlYXN30tWg6SLEB')
            .then((result) => {
            }, (error) => {
            });
        e.target.reset()
    }

    return (
        <div id={'id-contacts'} className={s.contacts}>
            <div className={`${style.container} ${s.contactsBlock}`}>
                <h2>Contacts</h2>
                <form className={s.contactsBlockForm} onSubmit={sentEmail}>
                    <input type={"text"}
                           name={'name'}
                           required
                           placeholder={'Enter your name'}
                           className={s.contactsBlockInput}/>
                    <input type={"email"}
                           name={'email'}
                           required
                           placeholder={'Enter your email'}
                           className={s.contactsBlockInput}/>
                    <textarea placeholder={'Enter your message'}
                              name={'message'}
                              required
                              className={s.contactsBlockTextarea}></textarea>
                    <button type={'submit'}>Send</button>
                </form>

            </div>
        </div>);
}

