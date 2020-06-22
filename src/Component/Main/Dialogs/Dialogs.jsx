import React from 'react';
import s from './Dialogs.module.css'
import Me from "./Me/Me";
import Message from "./Message/Message";

const Dialogs = (props) => {

    return (
        <div className={s.content}>
            <Me />
            <Message />
        </div>

    )
};

export default Dialogs;