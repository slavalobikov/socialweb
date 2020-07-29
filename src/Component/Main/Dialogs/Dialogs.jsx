import React from 'react';
import s from './Dialogs.module.css'
import MeContainer from "./Me/MeContainer";
import MessageContainer from "./Message/MessageContainer";

const Dialogs = (props) => {

    return (
        <div className={s.content}>
            <MeContainer />
            <MessageContainer />
        </div>

    )
};

export default Dialogs;