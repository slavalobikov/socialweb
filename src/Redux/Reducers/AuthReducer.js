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

export default AuthPageReducer;