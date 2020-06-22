import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <NavLink to="/profile" activeClassName={s.active} >Моя страница</NavLink>
            <NavLink to="/dialogs" activeClassName={s.active} >Сообщения</NavLink>
            <NavLink to="/users" activeClassName={s.active} >Пользователи</NavLink>
        </header>

    )
};

export default Header;