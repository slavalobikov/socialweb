import {authAPI, authme} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const IS_AUTH_BOOL = 'IS_AUTH_BOOL';
const SET_DATA_ABOUT_LOGIN = 'SET_DATA_ABOUT_LOGIN';
const LOGOUT = 'LOGOUT'

let initialState = {
    id:null,
    email:null,
    login:null,
    isAuth:null,
    password:null,
    rememberMe:null,

};

const AuthPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default: return state
    }

};

export const setUserData = (id, email, login, isAuth) => ({type:SET_USER_DATA, payload:{id, email, login, isAuth} });

export const setDataLoginThunk = (email, password) => {
    return (dispatch) => {
        authAPI.login(email, password, ).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authmeThunk())

            }
        })
    }
};

export const authmeThunk = () => {
    return (dispatch) => {
        authAPI.authme().then(response => {
            if (response.resultCode === 0) {
                //setUserData(dispatch(setUserData(response.data.id, response.data.email, response.data.login , true)))
                dispatch(setUserData(response.data.id, response.data.email, response.data.login , true))
            }
        })

    }
};

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.resultCode === 0) {
                setUserData(dispatch(setUserData(null, null, null, false)))
               // dispatch(authmeThunk())
            }
        })
    }
};


export default AuthPageReducer;