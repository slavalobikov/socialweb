import React from 'react';
import s from './Dialogs.module.css'
import MeContainer from "./Me/MeContainer";
import MessageContainer from "./Message/MessageContainer";
import MessageArea from "./MessageArea/MessageArea";
import MessageAreaContainer from "./MessageArea/MessageAreaContainer";

const Dialogs = (props) => {

    return (
        <div className={s.content}>
            <MeContainer />
            <MessageContainer />
            <MessageAreaContainer />
        </div>

    )
};

export default Dialogs;