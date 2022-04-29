import React from "react";
import {BtnAddMessage} from "../../UI/Buttons";
import styles from "./SendMessage.module.css"

const SendMessage = (props) => {

    let onSendMessage=()=>{
        props.sendMessage()
    }

    let onChangeMessage = (e) => {
        let body = e.target.value;
        props.onChangeMessage(body)
    }

    return (
        <div className={styles.container}>
            <textarea
                className={styles.textarea}
                onChange={onChangeMessage}
                placeholder="Message..."
                value={props.newMessageBody}
               />
            <BtnAddMessage text='Send' sendMessage={onSendMessage} />
        </div>
    )
}

export default SendMessage