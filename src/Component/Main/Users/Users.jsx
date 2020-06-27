import React from 'react';
import s from './Users.module.css'
import Post from "../Main/Post/Post";
import * as axios from "axios";
import {getUsers} from "../../../api/api";

const Users = (props) => {

    let onPageChanged = (pageNumber) => {
        props.setCurrent(pageNumber)
            getUsers(pageNumber, props.pageSize )
            .then(response => {
                props.setUsers(response.items)
            });
    };

    let pages = props.pages.map ( p => <div onClick={ (e) => onPageChanged(p) } className={ props.currentPage === p && s.selectedPage  } >{p}</div>  );

    return (
        <div className={s.content}>
            <div>
            {
                props.users.map (u =>
                    <div> {u.name}
                        <div><img src={!u.photos.large ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/1200px-VK.com-logo.svg.png' : u.photos.large } alt={u.name} /></div>
                        {u.isFollow
                            ? <button onClick={ () => props.unfollow(u.id) } > Отписаться </button>
                            : <button onClick = {  ( ) => props.follow(u.id) }  > Подписаться </button>}</div>
                )
            }
            </div>

        <div>
            {pages}
        </div>
        </div>

    )
};

export default Users;