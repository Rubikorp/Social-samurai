import React from "react";
import s from "./Buttons.module.css"


const Btn =(props)=> {
    return (
        <button className={s.button}>{props.text}</button>
    )
}

const BtnLike=(props)=> {
    return (
        <button className={s.buttonLike}><span>&#128571;</span>{props.text}</button>
    )
}

export {Btn, BtnLike}