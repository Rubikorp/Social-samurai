import React from "react";
import Logo from "../../static/logo.jpg"
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
          <div className={s.logo__block}>
            <img className={s.logo} src={Logo} alt={Logo}/>
            <p className={s.logo__dscr}>
              Samurai
            </p>
          </div>

          <div className={s.login__block}>
            {props.isAuth
              ? <NavLink to={'/profile/'+ props.myId} className={s.login}>{props.username}</NavLink>
              : <NavLink to='/login' className={s.login}>Login</NavLink>}
          </div>
        </header>
    )
};

export default Header