import React from "react";
import s  from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Message";
import SendMessage from "./SendMessage/SendMessaje"




const Dialogs = (props) => {

    let dialogsElement = props.dialogsData
        .map(dialog => (<DialogsItem
            name={dialog.name}
            id={dialog.id} />));
    let messageElement = props.messagesData
        .map(m => (<Message message={m.message} />));


    return (
        <div className='container bg'>
            <h2 className={s.header}>Dialogs</h2>
            <div className={s.containe}>
                <div className={s.dialogs}>
                    <div className={s.users}>
                        <div className={s.list}>
                            {dialogsElement}
                        </div>
                    </div>
                    <div className={s.chats}>
                        <div className={s.overflow}>
                            <div className={s.message__containe}>
                                {messageElement}
                            </div>
                        </div>
                        <SendMessage
                            sendMessage={props.sendMessage}
                            onChangeMessage={props.onChangeMessage}
                            newMessageBody={props.newMessageBody}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs