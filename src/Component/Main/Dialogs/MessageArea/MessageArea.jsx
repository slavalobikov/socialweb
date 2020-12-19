import React, {useState} from 'react';
import s from './MessageArea.module.css'
import cn from "classnames";
import Preloader from "../../../../common/Preloader";



const MessageArea = (props) => {

    const [message, setMessage] = useState('ddd');

    const ga = () => {
        alert(message)
    };

    if (!props.profile) {
        return <Preloader/>
    }

    let id = props.match.params.userID;

    if (props.match.params.userID) {

        debugger
        console.log('messElement', props.dialogsReducer.messages[props.match.params.userID - 1])

        let MessageElements = props.dialogsReducer.messages[props.match.params.userID - 1]/*.a*/.map(m => (
            <div key={m.id} className={ cn({
                [s.right]: m.isYou, [s.message]: true
            }, s.pageNumber) }>
                <div className={s.flex}>
                    <div>
                        <img className={s.img} src={m.isYou ? props.dialogsReducer.users[id-1].img : props.profile.photos.large} alt=""/>
                    </div>
                    <div className={s.messageText }><span className={s.NameP}>
                        {m.isYou ? props.dialogsReducer.users[id-1].name : props.profile.fullName }:
                    </span></div>

                    <div className={s.messageText}><span className={s.text}>{m.message}</span></div>
                </div>

            </div>
        ));

        const addMessage = (Id) => {
            console.log('test', props.dialogsReducer.messages[props.match.params.userID - 1])
            props.addMessage(Id)
        };

        return (
            <div className={s.MessageArea}>
                {MessageElements}
                <div>
                    <input value={message}
                           onChange={(e) => setMessage(e.target.value) }
                           type="text"/>
                    <button onClick={() => addMessage(id)}>Отправить</button>
                </div>
            </div>
        )
    } else {
        return <span></span>
    }

};

export default MessageArea;