import {userAPI} from "../../api/api";
import {updateObjectInArray} from "../../utils/objectHelplers";
import {UsersType} from "../../Types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../ReduxStore";
import { Dispatch } from "redux";




let initialState = {
    users: [] as Array<UsersType> ,
    pageSize: 7,
    totalUsers: 0,
    currentPage: 1,
    isFetching: false,
    isDisabled: [] as Array<number>,
    status:'',
    countUsersAuto:0
};

export type InitialStateType = typeof initialState


const UsersPageReducer = (state = initialState, action:ActionsTypes):InitialStateType => {


    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID,"id" ,{followed:true})
            };
        case UNFOLLOW_USER: {
            return {
                ...state,
                users:updateObjectInArray(state.users, action.userID,"id" ,{followed:false} )
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
        case GET_ADD_USER: {
            return {
                ...state,
                users: [...state.users, ...action.users],
                countUsersAuto:action.countUsersAuto++

            }
        }
        default:
            return state;
    }


};

type ActionsTypes = SetUsers | SetCurrent | getAddUsers
    | SetTotalUsersCount | Follow | Unfollow | IsDisabled | IsFetching;

type SetUsers = {
    type: typeof SET_USERS
    users: Array<UsersType>
}
export const setUsers = (users:Array<UsersType>):SetUsers => ({type: SET_USERS, users});
type SetCurrent = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

type getAddUsers = {
    type: typeof GET_ADD_USER
    users: Array<UsersType>
    countUsersAuto: number
}

export const getAddUsers = (users:Array<UsersType>, countUsersAuto:number):getAddUsers => ({type:GET_ADD_USER, users, countUsersAuto });

export const setCurrent = (currentPage: number):SetCurrent => ({type: SET_CURRENT_PAGE, currentPage});
type SetTotalUsersCount = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount: number
}
export const setTotalUsersCount = (totalCount: number):SetTotalUsersCount => ({type: SET_TOTAL_USERS_COUNT, totalCount});
type Follow = {
    type: typeof FOLLOW_USER
    userID: number
}
export const follow = (userID: number):Follow => {
    return {
        type: FOLLOW_USER,
        userID
    }
};
type Unfollow = {
    type: typeof UNFOLLOW_USER
    userID: number
}
export const unfollow = (userID: number):Unfollow => {
    return {
        type: UNFOLLOW_USER,
        userID
    }
};
type IsDisabled = {
    type: typeof IS_DISABLED
    bool: boolean,
    id: number
}
export const isDisabled = (bool: boolean, id: number):IsDisabled => {
    return ({type: IS_DISABLED, bool, id})
};
export type IsFetching = {
    type: typeof IS_FETCHING
    bool: boolean
}
export const isFetching = (bool: boolean):IsFetching => ({type: IS_FETCHING, bool });


export const SET_USERS = "SET_USERS";

const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

const IS_DISABLED = 'IS_DISABLED';
const IS_FETCHING = 'IS_FETCHING';
const GET_ADD_USER = 'GET_ADD_USER';

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;



export const getUserAC = (currentPage:number, pageSize:number)
    : ThunkType => {
    return async (dispatch, getState) => {
        dispatch(isFetching(true));
        let response = await userAPI.getUsers(currentPage, pageSize);
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
        dispatch(isFetching(false))
    }
};


const followUnfollowFlow = async (dispatch:Dispatch<ActionsTypes>, id:number, apiMethod:any, actionCreator:  any) => {
    dispatch(isDisabled(true, id));
    let response = await apiMethod(id);
    if (response === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(isDisabled(false, id))
};
export const followUserThunk = (id:number): ThunkType => async (dispatch) => {
    let apiMethod = userAPI.followUser.bind(userAPI);
    let FollowSuccess = follow;
    followUnfollowFlow(dispatch, id, apiMethod, FollowSuccess)
};
export const unfollowUserThunk = (id:number): ThunkType => async (dispatch) => {
    let apiMethod = userAPI.unfollowUser.bind(userAPI);
    let UnFollowSucceess = unfollow;
    followUnfollowFlow(dispatch, id, apiMethod, UnFollowSucceess)
};

export const onPageChangedThunk = (pageNumber: number, pageSize: number): ThunkType => async (dispatch) => {
    dispatch(isFetching(true));
    dispatch(setCurrent(pageNumber));
    let response = await userAPI.getUsers(pageNumber, pageSize);
    dispatch(setUsers(response.items));
    dispatch(isFetching(false))
};

export const getAddUsersThunk = (currentPage: number, pageSize: number, countUsersAuto:number): ThunkType => async (dispatch) => {

    let response = await userAPI.getUsers(currentPage + 1, pageSize)
    dispatch(getAddUsers(response.items, countUsersAuto))
}

export default UsersPageReducer;