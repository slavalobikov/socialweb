import {authAPI, authme} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const IS_AUTH_BOOL = 'IS_AUTH_BOOL';
const SET_DATA_ABOUT_LOGIN = 'SET_DATA_ABOUT_LOGIN';


let initialState = {
    id:null,
    email:null,
    login:null,
    isAuth:false,
    password:null,
    rememberMe:null,

};

const AuthPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case SET_DATA_ABOUT_LOGIN:
            return {
                ...state,
                ...action.payload
            };

        default: return state
    }
};

export const setUserData = (id, email, login) => ({type:SET_USER_DATA, data:{id, email, login} });
const setDataAboutLogin = (email, password, rememberMe) => ({type:SET_DATA_ABOUT_LOGIN, payload:{email, password,rememberMe}});

export const setDataLoginThunk = (email, password) => {
    return (dispatch) => {
        debugger
        authAPI.login(email, password).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setDataAboutLogin(email, password))
            }
        })
    }
};

export const authmeThunk = () => {
    return (dispatch) => {
        authAPI.authme().then(response => {
            if (response.resultCode === 0) {
                setUserData(dispatch(setUserData(response.data.id, response.data.email, response.data.login)))
            }
        })

    }
};



export default AuthPageReducer;