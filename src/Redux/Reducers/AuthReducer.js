import {authAPI, authme} from "../../api/api";
import {stopSubmit} from "redux-form"

const SET_USER_DATA = 'SET_USER_DATA';

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
        default: return state
    }


};

export const setUserData = (id, email, login, isAuth) => ({type:SET_USER_DATA, payload:{id, email, login, isAuth} });

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
                dispatch(setUserData(null, null, null, false))
            }
};


export default AuthPageReducer;