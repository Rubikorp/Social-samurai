import React from "react";
import {BtnAddMessage} from "../../UI/Buttons";
import styles from "./SendMessage.module.css"
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../Redux/state"

const SendMessage = (props) => {

    let sendMessage = () => {
        props.dispatch(sendMessageCreator())
    }

    let onChangeMessage = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={styles.container}>
            <textarea
                className={styles.textarea}
                onChange={onChangeMessage}
                placeholder="Message..."
                value={props.state.newMessageBody}
               />
            <BtnAddMessage text='Send' sendMessage={sendMessage} />
        </div>
    )
}

export default SendMessage