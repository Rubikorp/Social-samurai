import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div>
            <NavLink
                className={navData => navData.isActive ? s.active : s.item}
                to={path}
            >{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        {id:1, name: 'Ruslan'},
        {id:2, name: 'Roman'},
        {id:3, name: 'Elina'},
        {id:4, name: 'Victor'},
        {id:5, name: 'Dmitriy'},
        {id:6, name: 'Aleksey'},
    ]
    let messagesData = [
        {id:1, message: 'HI'},
        {id:2, message: 'How are you?'},
        {id:3, message: 'Ruslan'},
    ]
    return (
        <div className='container bg height__8vh'>
            <h2 className={s.header}>Dialogs</h2>
            <div className={s.containe}>
                <div className={s.dialogs}>
                    <div className={s.users}>
                        <div className={s.list}>
                            <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
                            <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
                        </div>
                    </div>
                    <div className={s.chats}>
                        <div className={s.message__containe}>
                            <Message message={messagesData[0].message}/>
                            <Message message={messagesData[1].message}/>
                            <Message message={messagesData[2].message}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs