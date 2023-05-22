import s from './main.module.scss';
import {MainText} from "./mainText/Main-text";
import {MainPic} from "./mainPic/Main-pic";
import style from '../../container.module.scss'
import Fade from 'react-reveal/Fade';
import {Particle} from "../../components/Particle";

export const Main=()=> {

    return (
        <div id={'id-main'} className={s.main}>
            <Fade top>
            <div className={`${style.container} ${s.mainBlock}`}>
                <MainText/>
                <MainPic/>
            </div>
            </Fade>
            <Particle />
        </div>
    );
}

