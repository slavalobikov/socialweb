import React from 'react';
import s from './Footer.module.css'
import {NavLink} from "react-router-dom";

const Footer = (props) => {
    return (
        <footer className={s.footer}>
            <NavLink to="/profile" activeClassName={s.active}><img className={s.img} src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png" alt="Profile"/></NavLink>

            <NavLink to="/dialogs" activeClassName={s.active}><img className={s.imgMessages} src="https://www.logolynx.com/images/logolynx/75/75189e2b07df0d2a8cc42dee4cf889b7.png" alt="messages"/></NavLink>
            <NavLink to="/users" activeClassName={s.active}><img className={s.img} src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-13/512/Users-icon.png" alt=""/>
            </NavLink>
        </footer>

    )
};

export default Footer;