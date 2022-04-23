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
    return (
        <div className='container bg height__8vh'>
            <h2 className={s.header}>Dialogs</h2>
            <div className={s.containe}>
                <div className={s.dialogs}>
                    <div className={s.users}>
                        <div className={s.list}>
                            <DialogsItem name="Ruslan" id="1" />
                            <DialogsItem name="Roman" id="2" />
                            <DialogsItem name="Elina" id="3" />
                            <DialogsItem name="Victor" id="4" />
                            <DialogsItem name="Dmitriy" id="5" />
                            <DialogsItem name="Aleksey" id="6" />
                        </div>
                    </div>
                    <div className={s.chats}>
                        <div className={s.message__containe}>
                            <Message message="Hi"/>
                            <Message message="How are you?"/>
                            <Message message="Ruslan"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs