import React from "react";
import {BtnAddMessage} from "../../UI/Buttons";
import styles from "./SendMessage.module.css"
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../../Redux/state"

const SendMessage = (props) => {

    let newElementMessage = React.createRef();

    let onChangeMessage = () => {
        let text = newElementMessage.current.value
        let action = updateNewMessageActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={styles.container}>
            <textarea
                className={styles.textarea}
                onChange={onChangeMessage}
                placeholder="Напишите сообщение"
                ref={newElementMessage}
                value={props.state.newMessage}
               />
            <BtnAddMessage text='Send' dispatch={props.dispatch} />
        </div>
    )
}

export default SendMessage