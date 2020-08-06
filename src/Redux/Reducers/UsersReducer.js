import {userAPI} from "../../api/api";
import {updateObjectInArray} from "../../utils/objectHelplers";

let initialState = {
    users: [],
    pageSize: 25,
    totalUsers: 0,
    currentPage: 1,
    isFetching: true,
    isDisabled: [],
    status:''
};


const UsersPageReducer = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID,"id" ,{followed:true})
/*
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
*/
            };
        case UNFOLLOW_USER: {
            return {
                ...state,
                users:updateObjectInArray(state.users, action.userID,"id" ,{followed:false} )
/*
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
*/
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }

        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsers: action.totalCount
            }
        }
/*        case IS_FETCHING_TRUE: {
            return {
                ...state,
                isFetching: true
            }
        }
        case IS_FETCHING_FALSE: {
            return {
                ...state,
                isFetching: false
            }
        }*/
        case IS_FETCHING: {
            return {
                ...state,
                isFetching: action.bool
            }
        }
        case IS_DISABLED: {
            return {
                ...state,
                isDisabled: action.bool
                    ? [...state.isDisabled, action.id]
                    : state.isDisabled.filter(id => id !== action.id)
            }
        }
        default:
            return state;
    }


};


export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrent = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const isFetchingTrue = () => ({type: IS_FETCHING_TRUE});
export const isFetchingFalse = () => ({type: IS_FETCHING_FALSE});
export const follow = (userID) => {
    return {
        type: FOLLOW_USER,
        userID
    }
};
export const unfollow = (userID) => {
    return {
        type: UNFOLLOW_USER,
        userID
    }
};
export const isDisabled = (bool, id) => {
    return ({type: IS_DISABLED, bool, id})
};
export const isFetching = (bool) => ({type: IS_FETCHING, bool });


export const SET_USERS = "SET_USERS";

const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const IS_FETCHING_TRUE = 'IS_FETCHING_TRUE';
const IS_FETCHING_FALSE = 'IS_FETCHING_FALSE';
const IS_DISABLED = 'IS_DISABLED';
const IS_FETCHING = 'IS_FETCHING';

export const getUserAC = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(isFetching(true));
        let response = await userAPI.getUsers(currentPage, pageSize);
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
        dispatch(isFetching(false))
    }
};


const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator ) => {
    dispatch(isDisabled(true, id));
    let response = await apiMethod(id);
    if (response === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(isDisabled(false, id))
};
export const followUserThunk = (id) => async (dispatch) => {
    let apiMethod = userAPI.followUser.bind(userAPI);
    let actionCreator = follow;
    followUnfollowFlow(dispatch, id, apiMethod, actionCreator)
};
export const unfollowUserThunk = (id) => async (dispatch) => {
    let apiMethod = userAPI.unfollowUser.bind(userAPI);
    let actionCreator = unfollow;
    followUnfollowFlow(dispatch, id, apiMethod, actionCreator)
};

export const onPageChangedThunk = (pageNumber, pageSize) => async (dispatch) => {
    //dispatch(isFetchingTrue());
    dispatch(isFetching(true));
    dispatch(setCurrent(pageNumber));
    let response = await userAPI.getUsers(pageNumber, pageSize);
    dispatch(setUsers(response.items));
    //dispatch(isFetchingFalse());
    dispatch(isFetching(false))
};

export default UsersPageReducer;