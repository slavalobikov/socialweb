import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import MeContainer from "./Me/MeContainer";

const Dialogs = (props) => {

    return (
        <div className={s.content}>
            <MeContainer />
            <Message />
        </div>

    )
};

export default Dialogs;