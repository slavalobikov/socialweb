import {authme} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const IS_AUTH_BOOL = 'IS_AUTH_BOOL';

let initialState = {
    id:null,
    email:null,
    login:null,
    isAuth:false

};

const AuthPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };

        default: return state
    }
};

export const setUserData = (id, email, login) => ({type:SET_USER_DATA, data:{id, email, login} });

export const authmeThunk = () => {
    return (dispatch) => {
        authme().then(response => {
            if (response.resultCode === 0) {
                setUserData(dispatch(setUserData(response.data.id, response.data.email, response.data.login)))
            }
        })

    }
};



export default AuthPageReducer;