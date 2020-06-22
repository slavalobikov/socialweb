import React from 'react';
import s from './Message.module.css'
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dilogsItems}>
                <div className={s.dialog}>
                   <NavLink to="/dialogs/1" >Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2" >Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3" >Sveta</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>

            </div>
        </div>

    )
};

export default Dialogs;