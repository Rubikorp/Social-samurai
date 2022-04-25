import React from "react";
import styles  from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";
import Avatar from "../../../static/103-1034278_wolf-clipart-alpha-wolf-alpha-wolf-logo-png.png"

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={styles.dialogsItem}>
            <NavLink
                className={navData => navData.isActive ? styles.active : styles.item}
                to={path}
            ><img src={Avatar} alt=""/> <span>{props.name}</span></NavLink>
        </div>
    )
}

export default DialogsItem