import React from 'react';
import s from './Message.module.css'
import {NavLink} from "react-router-dom";




const Dialogs = (props) => {
    console.log('dialogsReducer', props.dialogsReducer);
    let PersonElement = props.dialogsReducer.users.map(p => (
        <NavLink activeClassName={s.active} to={`/dialogs/${p.id}`}><DialogItem key={p.id} name={p.name} img={p.img} /></NavLink>
    ))
    return (
        <div className={s.dialogs}>
{/*
            <NavLink activeClassName={s.active} to="/dialogs/1"><DialogItem /></NavLink>
*/}
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