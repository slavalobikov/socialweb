import {SET_USERS} from "./Reducers/UsersReducer";



export const UPDATE_NEW_POST_TEXT = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text

    }
};
export const ADD_NEW_POST_TEXT = () => {
    return {
        type: ADD_NEW_POST_TEXT,
    }
};



export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
};