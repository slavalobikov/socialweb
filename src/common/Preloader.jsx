import React from 'react';

import s from './Preloader.module.css'

const Preloader = (props) => {

    return (
        <div className={s.preloader}>
            <h1>Загрузка...</h1>
        </div>
    )
};

export default Preloader;