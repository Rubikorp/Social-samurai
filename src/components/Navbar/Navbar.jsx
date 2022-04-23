import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";


const Nav =()=> {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={navData => navData.isActive ? s.active : s.link } to='/profile'>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={navData => navData.isActive ? s.active : s.link } to='/dialogs'>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={navData => navData.isActive ? s.active : s.link } to='/news'>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={navData => navData.isActive ? s.active : s.link } to='/music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={navData => navData.isActive ? s.active : s.link } to='/settings'>Settings</NavLink>
            </div>
        </nav>
    )
};

export default Nav