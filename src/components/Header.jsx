import React from "react";
import Logo from "../static/logo.jpg"
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src={Logo}/>
            <p className={s.logo__dscr}>
                Samurai
            </p>
        </header>
    )
};

export default Header