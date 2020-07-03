import {SET_USERS} from "./Reducers/UsersReducer";



export const ADD_NEW_POST_TEXT = (text) => {
    return {
        type: ADD_NEW_POST_TEXT,
        text
    }
};



export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
};