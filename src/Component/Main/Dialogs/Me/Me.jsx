import React from 'react';
import s from './Me.module.css'
import Preloader from "../../../../common/Preloader";


const Me = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    let id = props.match.params.userID;

    return (
        <div className={s.me} id="navbar">
            <div className={s.nameme}>
                <div>Вы:</div>
                <div className={s.nameP}>{props.profile.fullName}</div>

                <img src={props.profile.photos.large} alt=""/>
            </div>
                {props.match.params.userID && <div className={s.pr}>
                    <div className={s.nameUser}> Пользователь:
                        <div className={s.nameP}>{props.dialogsReducer.users[id - 1].name}</div></div>
                    <img
                        src={props.dialogsReducer.users[id - 1].img}
                        alt=""/>
                </div>}

        </div>

    )
};

export default Me;
