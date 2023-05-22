import {Link} from "react-scroll";
import s from "../header/burgerNavigation/burgerNavigation.module.scss"
import React from "react";

export const LinkComponents = (props) => {
    return (
        <>
            <Link to={props.element}
                  activeClass={props.activeClass}
                  spy={true}
                  smooth={true}
                  offset={-67}
                  duration={700}>
                <span onClick={props.onClickLink}>{props.title}</span>
            </Link>
        </>
    )
}