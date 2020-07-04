import {authmeThunk} from "./AuthReducer";


const SET_INITIALIZED = 'SET_INITIALIZED';


let initialState = {
    initialized: false,

};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };

        default:
            return state
    }


};

const setInitialized = () => ({type: SET_INITIALIZED})

/*
export const setDataLoginThunk = (email, password) => {
    return (dispatch) => {
        authAPI.login(email, password, ).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authmeThunk())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Ошибка"
                dispatch(stopSubmit("login", {_error:message }))

            }
        })
    }
};
*/

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(authmeThunk());

        Promise.all([promise]).then(() => {
            dispatch(setInitialized())
        })

    }
};


export default AppReducer;