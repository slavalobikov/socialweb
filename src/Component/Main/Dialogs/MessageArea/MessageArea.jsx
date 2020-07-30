import React from 'react';
import s from './MessageArea.module.css'
import cn from "classnames";

const MessageArea = (props) => {
/*
    console.log(props.dialogsReducer.messages[props.match.params.userID - 1].a)
*/
    if (props.match.params.userID) {
        let MessageElements = props.dialogsReducer.messages[props.match.params.userID - 1].a.map(m => (
            <div key={m.id} className={ cn({
                [s.right]: m.isYou, [s.message]: true
            }, s.pageNumber) }><span className={s.text}>{m.message}</span></div>
        ));
        return (
            <div className={s.MessageArea}>
                {MessageElements}
            </div>
        )
    } else {
        return <span></span>
    }

};

export default MessageArea;