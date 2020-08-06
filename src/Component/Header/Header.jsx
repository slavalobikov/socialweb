import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";



const Header = (props) => {


    if (!props.profilePage) {
        return <div>   </div>
    }


    return (
        <header className={s.header}>

            <NavLink to="/profile" activeClassName={s.active} >Моя страница</NavLink>
            <NavLink to="/dialogs" activeClassName={s.active} >Сообщения</NavLink>
            <NavLink to="/users" activeClassName={s.active} >Пользователи</NavLink>

           {props.isAuth
               ? <div className={s.auth}>{props.login} <img src={!props.profilePage.photos.large
                   ? 'https://avatars.yandex.net/get-music-content/175191/f26e7e1a.p.5821649/m1000x1000'
                   : props.profilePage.photos.large} alt=""/> <NavLink to={"/login"} onClick={props.logout}>Выйти</NavLink>

           </div>
               : <div className={s.auth}><NavLink className={s.logout} to={'/login'}>Войдите</NavLink></div> }

        </header>

    )
};

export default Header;