import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";



const Header = (props) => {
    const logout = () => {
        props.logout(false);
        console.log(props.isAuth)
    };


    const hello = () => {
        alert(props.isAuth)
    };
    return (
        <header className={s.header}>

            <NavLink to="/profile" activeClassName={s.active} >Моя страница</NavLink>
            <NavLink to="/dialogs" activeClassName={s.active} >Сообщения</NavLink>
            <NavLink to="/users" activeClassName={s.active} >Пользователи</NavLink>

           {props.isAuth
               ? <div className={s.auth}>{props.login} <img src={!props.photo
                   ? 'https://avatars.yandex.net/get-music-content/175191/f26e7e1a.p.5821649/m1000x1000'
                   : props.photo} alt=""/> <NavLink to={"/login"} className={s.logout} onClick={logout}>Выйти</NavLink>

           </div>
               : <div className={s.auth}>Войдите</div> }
            <button onClick={hello} >HHH</button>

        </header>

    )
};

export default Header;