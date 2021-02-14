import React from 'react';
import s from './Users.module.css'

import Preloader from "../../../common/Preloader";
import User from "./User";
import Paginator from "../../../common/Paginator/Paginator";
import {UsersType} from "../../../Types/types";

type PropsType = {
    users: Array<UsersType>,
    isFetching: boolean,
    currentPage: number,
    pageSize: number,
    //totalItemsCount: number,
    Disabled: any,
    pagesCount: number,

    followUserThunk: (id: number) => void
    unfollowUserThunk: (id: number) => void
    onPageChangedThunk: (pageNumber: number, pageSize: number) => void
    getAddUsersThunk: (currentPage: number, pageSize: number) => void






}

const Users: React.FC<PropsType> = ({followUserThunk,
                                        pagesCount,
                   users,
                   unfollowUserThunk,
                   onPageChangedThunk,
                   isFetching,
                   currentPage,
                   pageSize,
                   getAddUsersThunk, Disabled }) => {

    let fUser: (id: number) => void = (id) => {
        followUserThunk(id);
    };
    let unfUser: (id: number) => void = (id) => {
        unfollowUserThunk(id)
    };
   let onPageChanged: (pageNumber: number) => void = (pageNumber) => {
        onPageChangedThunk(pageNumber, pageSize)
    };


    return (
        <div className={s.content}>

            { isFetching ? <Preloader/>
            : <div>
                    <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                               totalItemsCount={pagesCount} pageSize={pageSize}/>




                    {users.map(u =>
                        <User u={u} Disabled={Disabled} unfUser={unfUser} fUser={fUser} key={u.id}
                              status={u.status} />
                    )
                    }
                </div>}
        </div>

    )
};

export default Users;