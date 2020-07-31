import React from 'react';
import s from './Message.module.css'
import {NavLink} from "react-router-dom";




const Dialogs = (props) => {
    let PersonElement = props.dialogsReducer.users.map(p => (
        <NavLink key={p.id} activeClassName={s.active} to={`/dialogs/${p.id}`}><DialogItem  name={p.name} img={p.img} /></NavLink>
    ));
    return (
        <div className={s.dialogs}>

            {PersonElement}

        </div>

    )
};
const DialogItem = ({name, img}) => {
    return <div className={s.DialogItem}>
        <div><img src={img} alt=""/></div>
        <div>{name}</div>
    </div>
};

export default Dialogs;