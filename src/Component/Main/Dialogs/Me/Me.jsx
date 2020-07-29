import React from 'react';
import s from './Me.module.css'
import Preloader from "../../../../common/Preloader";


const Me = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    let id = props.match.params.userID;
    console.log('props', props.dialogsReducer.users[id-1]);

    return (
        <div className={s.me} id="navbar">
            <div className={s.nameme}> Вы {props.profile.fullName} </div>
            <img src={props.profile.photos.large} alt=""/>
            {props.match.params.userID && <div>
                <div className={s.nameUser}> Пользователь:
                    <div>{props.dialogsReducer.users[id-1].name}</div></div>
                <img
                    src={props.dialogsReducer.users[id-1].img}
                    alt=""/>
            </div>}
        </div>

    )
};

export default Me;