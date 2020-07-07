import {authAPI, authme} from "../../api/api";
import {stopSubmit} from "redux-form"

const SET_USER_DATA = 'SET_USER_DATA';
const LOGOUT = 'LOGOUT';

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
                ...action.payload,
            };
        case LOGOUT:
            return {
               ...state,
                isAuth:action.bool
            };
        default: return state
    }


};

export const setUserData = (id, email, login, isAuth) => ({type:SET_USER_DATA, payload:{id, email, login, isAuth} });
export const logoutP = (bool) => ({type:LOGOUT, bool});

export const setDataLoginThunk = (email, password) => async (dispatch) => {
        let response = await authAPI.login(email, password, )
            if (response.data.resultCode === 0) {
                dispatch(authmeThunk())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Ошибка"
                dispatch(stopSubmit("login", {_error:message }))
            }
    };


export const authmeThunk = () => async (dispatch) => {
        let response = await  authAPI.authme();
            if (response.resultCode === 0) {
                dispatch(setUserData(response.data.id, response.data.email, response.data.login , true))
            }
};

export const logout = (bool) => async (dispatch) => {
        let response = await authAPI.logout();
            if (response.resultCode === 0) {
                dispatch(logoutP(bool));
            }
};


export default AuthPageReducer;