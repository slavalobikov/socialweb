import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form"
import {isFetching} from "./UsersReducer";

const SET_HELLO ='SET_HELLO';

const SET_USER_DATA = 'SET_USER_DATA';
const LOGOUT = 'LOGOUT';
let initialState = {
    id:null,
    email:null,
    login:null,
    isAuth:false,
    password:null,
    rememberMe:null,
    hello: false
};

const AuthPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case SET_HELLO:
            return  {
                ...state,
                hello: action.bool
            };
        case LOGOUT:
            return {
                ...state,
                isAuth:false,
                login:null,
            };
        default: return state
    }
};

export const logoutAC = () => ({type: LOGOUT})

export const HelloAC = (bool) => ({type:SET_HELLO, bool})

export const setUserData = (id, email, login, isAuth) => ({type:SET_USER_DATA, payload:{id, email, login, isAuth} });

export const setDataLoginThunk = (email, password) => async (dispatch) => {
        let response = await authAPI.login(email, password, );
            if (response.data.resultCode === 0) {
                dispatch(authmeThunk())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Ошибка"
                dispatch(stopSubmit("login", {_error:message }))
            }
    };


export const authmeThunk = () => async (dispatch) => {
        let response = await  authAPI.authme();
    dispatch(isFetching(true));
    if (response.resultCode === 0) {
                dispatch(setUserData(response.data.id, response.data.email, response.data.login , true))
            }
    dispatch(isFetching(false));

};

export const logout = (bool) => async (dispatch) => {
        let response = await authAPI.logout();
        if (response.data.resultCode === 0){
            dispatch(setUserData(null, null, null, false))
        }
            };



export default AuthPageReducer;