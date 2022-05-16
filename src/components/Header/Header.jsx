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

          <div>
            {props.isAuth
              ? <div className={s.login__block}>
                  <NavLink to={'/profile'} className={s.login}>{props.username}</NavLink>
                  <button className='button' onClick={props.logout}>Logout</button>
                </div>
              : <NavLink to='/login' className={s.login}>Login</NavLink>}
          </div>
        </header>
    )
};

export default Header