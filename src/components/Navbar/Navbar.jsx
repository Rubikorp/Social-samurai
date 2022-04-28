import React from "react";
import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import Friends from "./friendsList/Friends"


const Nav =(props)=> {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink
                    className={navData => navData.isActive ? styles.active : styles.link }
                    to='/profile'>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink
                    className={navData => navData.isActive ? styles.active : styles.link }
                    to='/dialogs'>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink
                    className={navData => navData.isActive ? styles.active : styles.link }
                    to='/news'>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink
                    className={navData => navData.isActive ? styles.active : styles.link }
                    to='/music'>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink
                    className={navData => navData.isActive ? styles.active : styles.link }
                    to='/settings'>Settings</NavLink>
            </div>
            <div className={styles.item}>
                <Friends userList={props.state.userList}/>
            </div>
        </nav>
    )
};

export default Nav