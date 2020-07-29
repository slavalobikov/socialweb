import React from 'react';
import s from './Me.module.css'
import Preloader from "../../../../common/Preloader";


const Me = (props) => {


    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.me} id="navbar">
            <div className={s.nameme}> Вы {props.profile.fullName} </div>
            <img src={props.profile.photos.large} alt=""/>
            {props.match.params.userID && <div>
                <div className={s.nameUser}> Пользователь</div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiTFKqGQSmNR0oBxxx7XkVRlO_OijvVdh6n7RRyp1fWsKoFPSQ&usqp=CAU"
                    alt=""/>
            </div>}
        </div>

    )
};

export default Me;