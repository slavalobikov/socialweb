import {authmeThunk} from "./AuthReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

export type InitialStateType = {
    initialized: boolean
}

let initialState:InitialStateType = {
    initialized: false,
};

const AppReducer = (state = initialState, action: any):InitialStateType => {
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

type SetInitializedActionType = {
    type: typeof SET_INITIALIZED
}

const setInitialized = ():SetInitializedActionType => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch: any) => {
        let promise = dispatch(authmeThunk());
        Promise.all([promise]).then(() => {
            dispatch(setInitialized())
        })
};


export default AppReducer;