import React from "react";
import styles from "./Friends.module.css"
import Avatar from "../../../static/103-1034278_wolf-clipart-alpha-wolf-alpha-wolf-logo-png.png"

const Friends =(props) => {
    let userList = props.userList
        .map(user =>
            <div className={styles.friendsItem}>
                <div>
                    <img src={Avatar} alt=""/>
                </div>
                <div>
                    {user.name}
                </div>
            </div>)
    return (
        <div className={styles.friendsList}>
            Friends
                <div className={styles.overflow}>
                    {userList}
                </div>
        </div>
    )
}

export default Friends