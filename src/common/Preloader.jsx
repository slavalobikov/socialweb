import React from 'react';
import PreloaderImg from './images/preloader.svg'

import s from './Preloader.module.css'

const Preloader = (props) => {

    return (
        <div className={s.preloader}>
            <img src={PreloaderImg} alt=""/>
{/*
            <h1>Загрузка...</h1>
*/}
        </div>
    )
};

export default Preloader;