import React from 'react';
import s from './Users.module.css'
import {getUsers} from "../../../api/api";
import Preloader from "../../../common/Preloader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

    debugger

    let onPageChanged = (pageNumber) => {

        props.isFetchingTrue();
        props.setCurrent(pageNumber);
            getUsers(pageNumber, props.pageSize )
            .then(response => {
                props.setUsers(response.items);
                props.isFetchingFalse();
            });

    };

    let pages = props.pages.map ( p => <div onClick={ (e) => onPageChanged(p) } className={ props.currentPage === p && s.selectedPage  } >{p}</div>  );

    return (
        <div className={s.content}>

            { props.isFetching ? <Preloader/>
            : <div>
                    {props.users.map(u =>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                            {u.name}
                            <div><img
                                src={!u.photos.large ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/1200px-VK.com-logo.svg.png' : u.photos.large}
                                alt={u.name}/></div>
                            </NavLink>
                            {console.log(u.isFollow)}
                            {u.followed
                                ? <button /*onClick={/!*() => props.unfollowUser(u.id).then(response => {
                                    if (response === 0) {
                                        return props.follow(u.id)
                                    }
                                })*!/}*/
                                    onClick={() =>{ axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {withCredentials:true,
                                        headers:{
                                            "API-KEY":"be820c73-af0b-4ffa-9553-5bd0d04425d6"
                                        }}).then(response => {
                                                debugger
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)

                                            }
                                    })} }> Отписаться </button>
                                : <button /*onClick={() => props.unfollowUser(u.id).then(response => {
                                    if (response === 0) {

                                        props.unfollow(u.id)
                                    }
                                })}*/
                                    onClick={() =>{ axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                        {withCredentials:true,
                                            headers:{
                                                "API-KEY":"be820c73-af0b-4ffa-9553-5bd0d04425d6"
                                            }}).then(response => {

                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id)

                                        }
                                    })} }
                                > Подписаться </button>}</div>
                    )
                    }
                </div>}
        <div>
            {pages}
        </div>
        </div>

    )
};

export default Users;