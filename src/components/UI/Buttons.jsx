import React from "react";
import s from "./Buttons.module.css"
import {sendMessageActionCreator} from "../../Redux/state"

const Btn =(props)=> {
    return (
        <button onClick={props.addPost} className={s.button}>{props.text}</button>
    )
}

const BtnLike=(props)=> {
    return (
        <button className={s.buttonLike}><span>&#128571;</span>{props.text}</button>
    )
}

const BtnAddMessage = (props) => {
    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }
    return (
        <button
            className={s.button}
            onClick={sendMessage}
        >{props.text}</button>
    )
}

export {Btn, BtnLike, BtnAddMessage}