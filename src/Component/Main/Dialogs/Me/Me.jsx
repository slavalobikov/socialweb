import React from 'react';
import s from './Me.module.css'

const Me = (props) => {



    return (
        <div className={s.me} id="navbar">
            <div className={s.nameme}> Вы хххх </div>
            <img src="https://media.vanityfair.com/photos/5c5325d33889055ec0570bcf/master/pass/t-ava-max-interview.jpg" alt=""/>
            <div className={s.nameUser}> Пользователь </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiTFKqGQSmNR0oBxxx7XkVRlO_OijvVdh6n7RRyp1fWsKoFPSQ&usqp=CAU" alt=""/>
        </div>

    )
};

export default Me;