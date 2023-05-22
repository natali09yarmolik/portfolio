import React from 'react'
import s from './contacts.module.scss'
import style from '../../container.module.scss'

export const Contacts=()=> {
    return (
        <div id={'id-contacts'} className={s.contacts}>
            <div className={`${style.container} ${s.contactsBlock}`}>
                <h2>Contacts</h2>
                <form className={s.contactsBlockForm}>
                    <input type={"text"}
                           placeholder={'Enter your name'}
                           className={s.contactsBlockInput}/>
                    <input type={"text"}
                           placeholder={'Enter your phone'}
                           className={s.contactsBlockInput}/>
                    <textarea placeholder={'Enter your message'}
                              className={s.contactsBlockTextarea}></textarea>
                    <button type={'submit'}>Send</button>
                </form>

            </div>
        </div>);
}

