import React from "react";
import s  from "../Dialogs.module.css"
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

export default DialogsItem