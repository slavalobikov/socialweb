import React from 'react';
import {NavLink} from "react-router-dom";
import s from './User.module.css'


const User = (props) => {

/*
    console.log('props', props);
*/

    return (
        <div className={s.user}>
            <NavLink to={"/profile/" + props.u.id}>
                <div>Имя пользователя: {props.u.name} </div>
                <div><img
                    src={!props.u.photos.large ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/1200px-VK.com-logo.svg.png' : props.u.photos.large}
                    alt={props.u.name}/></div>
                <div>{props.status && <div>Cтатус: {props.status} </div>}</div>
            </NavLink>
            {props.u.followed
                ? <button className={s.unfollow} disabled={props.Disabled.some(id => id === props.u.id)}
                          onClick={() => props.unfUser(props.u.id) }> Отписаться </button>
                : <button className={s.follow} disabled={props.Disabled.some(id => id === props.u.id)}
                          onClick={ () => props.fUser(props.u.id) }> Подписаться </button>}

{/*
                          <div>{props.status || 'Статуса нема'}</div>
*/}

        </div>
    )
};

export default User;