import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form"
import {isFetching} from "./UsersReducer";

const SET_HELLO ='SET_HELLO';
const SET_USER_DATA = 'SET_USER_DATA';
const LOGOUT = 'LOGOUT';

export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    password: null | string
    rememberMe: boolean | null
    hello: false
}
let initialState:InitialStateType = {
    id:null,
    email:null,
    login:null,
    isAuth:false,
    password:null,
    rememberMe:null,
    hello: false
};

const AuthPageReducer = (state = initialState, action: any) => {
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

type LogoutACType = {
    type: typeof LOGOUT
}

export const logoutAC = ():LogoutACType => ({type: LOGOUT})


type ActionPayloadType = {
    id: number | null
    email:string | null
    login:string | null
    isAuth:boolean
}

type SetUserDataActionType = {
    type: typeof SET_USER_DATA
    payload:ActionPayloadType
}

export const setUserData = (id: number | null, email:string | null, login:string | null, isAuth:boolean): SetUserDataActionType =>
    ({type:SET_USER_DATA, payload:{id, email, login, isAuth} });

export const setDataLoginThunk = (email:any, password:any) => async (dispatch: any) => {
        dispatch(isFetching(true))
        let response = await authAPI.login(email, password, );
            if (response.data.resultCode === 0) {
                dispatch(authmeThunk())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Ошибка"
                dispatch(stopSubmit("login", {_error:message }))
            }
            dispatch(isFetching(false))
    };


export const authmeThunk = () => async (dispatch: any) => {
    let response = await  authAPI.authme();
    if (response.resultCode === 0) {
                dispatch(setUserData(response.data.id, response.data.email, response.data.login , true))
            }


};

export const logout = (bool: any) => async (dispatch: any) => {
        let response = await authAPI.logout();
        if (response.data.resultCode === 0){
            dispatch(setUserData(null, null, null, false))
        }
            };



export default AuthPageReducer;