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

const setInitialized = () => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch) => {
        let promise = dispatch(authmeThunk());
        Promise.all([promise]).then(() => {
            dispatch(setInitialized())
        })
};


export default AppReducer;