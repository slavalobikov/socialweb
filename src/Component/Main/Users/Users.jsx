import React from 'react';
import s from './Users.module.css'

const Users = (props) => {



debugger
    return (
        <div className={s.content}>
            {
                props.users.map (u =>
                    <div> {u.name}
                        <div><img src={u.img} alt={u.name} /></div>
                        {u.isFollow
                            ? <button onClick={ () => props.unfollow(u.id) } > Отписаться </button>
                            : <button onClick = {  ( ) => props.follow(u.id) }  > Подписаться </button>}</div>
                )
            }

        </div>

    )
};

export default Users;