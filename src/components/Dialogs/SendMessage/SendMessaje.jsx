import React from "react";
import {BtnAddMessage} from "../../UI/Buttons";
import styles from "./SendMessage.module.css"

const SendMessage = () => {
    return (
        <div className={styles.container}>
            <textarea
                className={styles.textarea}
                placeholder="Напишите сообщение"></textarea>
            <BtnAddMessage text='Send' />
        </div>
    )
}

export default SendMessage