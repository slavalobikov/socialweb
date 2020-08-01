import React, {useState} from 'react';
import s from './MessageArea.module.css'
import cn from "classnames";
import Preloader from "../../../../common/Preloader";



const MessageArea = (props) => {
/*
    <img src={m.isYou ? props.dialogsReducer.users[id-1].img} alt=""/>
*/
    if (!props.profile) {
        return <Preloader/>
    }

/*
    console.log(props.profile.fullName);
*/
    let id = props.match.params.userID;

    if (props.match.params.userID) {
        let MessageElements = props.dialogsReducer.messages[props.match.params.userID - 1].a.map(m => (
            <div key={m.id} className={ cn({
                [s.right]: m.isYou, [s.message]: true
            }, s.pageNumber) }>
                <div className={s.flex}>
                    <div>
                        <img className={s.img} src={m.isYou ? props.dialogsReducer.users[id-1].img : props.profile.photos.large} alt=""/>
                    </div>
                    <div className={s.messageText}>{m.isYou ? props.dialogsReducer.users[id-1].name : props.profile.fullName }:</div>

                    <div className={s.messageText}><span className={s.text}>{m.message}</span></div>
                </div>

            </div>
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