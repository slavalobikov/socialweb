import {authAPI, ResultCode} from "../../api/api";
import {isFetching} from "./UsersReducer";

const SET_HELLO ='SET_HELLO';
const SET_USER_DATA = 'SET_USER_DATA';
const LOGOUT = 'LOGOUT';
const ERROR = 'ERROR'

export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    password: null | string
    rememberMe: boolean | null
    hello: false
    error: null | string
}
let initialState:InitialStateType = {
    id:null,
    email:null,
    login:null,
    isAuth:false,
    password:null,
    rememberMe:null,
    hello: false,
    error: null
};




const AuthPageReducer = (state = initialState, action: any)  => {
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
        case ERROR:
            return {
                ...state,
                error: action.error
            }
        default: return state
    }
};

type ActionTypes = LogoutACType | ActionPayloadType | SetUserDataActionType;


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

export const errorMessage = (error: any) => ({type:ERROR, error})

export const setDataLoginThunk = (email:any, password:any) => async (dispatch: any) => {
        dispatch(isFetching(true))
        let loginData = await authAPI.login(email, password, );
            if (loginData.resultCode === ResultCode.Success) {
                dispatch(authmeThunk())
            } else {

                dispatch(errorMessage(loginData.messages))

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
            dispatch(errorMessage(null))
        }
            };



export default AuthPageReducer;