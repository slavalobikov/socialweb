import React from 'react';
import {NavLink} from "react-router-dom";
import s from './User.module.css'


const User = ( {u, status, Disabled, unfUser, fUser}) => {


    return (
        <div className={s.user}>
            <NavLink to={"/profile/" + u.id}>
                <div>Имя пользователя: {u.name} </div>
                <div><img
                    src={u.photos.large ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/1200px-VK.com-logo.svg.png' : u.photos.large}
                    alt={u.name}/></div>
                <div>{status && <div>Cтатус: {status} </div>}</div>
            </NavLink>
            {u.followed
                ? <button className={s.unfollow} disabled={Disabled.some(id => id === u.id)}
                          onClick={() => unfUser(u.id) }> Отписаться </button>
                : <button className={s.follow} disabled={Disabled.some(id => id === u.id)}
                          onClick={ () => fUser(u.id) }> Подписаться </button>}



        </div>
    )
};

export default User;