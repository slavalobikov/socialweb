import React from 'react';
import s from './Users.module.css'

import Preloader from "../../../common/Preloader";
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let fUser = (id) => {
        props.followUserThunk(id);
    };
    let unfUser = (id) => {
    props.unfollowUserThunk(id)
    };
    let onPageChanged = (pageNumber) => {
        props.onPageChangedThunk(pageNumber, props.pageSize)
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
                            {u.followed
                                ? <button disabled={props.Disabled.some(id => id === u.id)}
                                    onClick={() => unfUser(u.id) }> Отписаться </button>
                                : <button disabled={props.Disabled.some(id => id === u.id)}
                                    onClick={ () => fUser(u.id) }> Подписаться </button>}
                        </div>
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