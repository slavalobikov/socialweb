import React from 'react';
import {NavLink} from "react-router-dom";


const User = (props) => {

    return (
        <div >
            <NavLink to={"/profile/" + props.u.id}>
                {props.u.name}
                <div><img
                    src={!props.u.photos.large ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/1200px-VK.com-logo.svg.png' : props.u.photos.large}
                    alt={props.u.name}/></div>
                <div>{props.status}</div>
            </NavLink>
            {props.u.followed
                ? <button disabled={props.Disabled.some(id => id === props.u.id)}
                          onClick={() => props.unfUser(props.u.id) }> Отписаться </button>
                : <button disabled={props.Disabled.some(id => id === props.u.id)}
                          onClick={ () => props.fUser(props.u.id) }> Подписаться </button>}
        </div>
    )
};

export default User;