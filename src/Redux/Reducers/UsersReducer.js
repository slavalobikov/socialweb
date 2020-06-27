import {ADD_NEW_POST_TEXT, FOLLOW_USER, FollowAC, UNFOLLOW_USER, UPDATE_NEW_POST_TEXT} from "../ActionTypes";


let initialState = {
    users:[],
    pageSize:100,
    totalUsers:0,
    currentPage:1,
};

const UsersPageReducer = (state = initialState, action ) => {


    switch(action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userID) {
                        return {...u, isFollow:true}
                    }
                    return u;
                })


            };
        case UNFOLLOW_USER: {
            return {
                ...state,
                users:state.users.map (u => {
                    if (u.id === action.userID) {
                        return {...u, isFollow:false }
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return  {

                ...state,
                users:action.users
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

        default: return state;
    }



};


export const setUsers = (users) => ({type:SET_USERS, users});
export const setCurrent = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})

export const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export default UsersPageReducer;