import {ADD_NEW_POST_TEXT, UPDATE_NEW_POST_TEXT} from "../ActionTypes";
import {followUser, getStatus} from "../../api/api";
import {follow, isDisabled} from "./UsersReducer";

const SET_STATUS_USER = "SET_STATUS_USER"

const SET_PHOTO_USER = 'SET_PHOTO_USER';

let initialState = {
    profilePage:[
        {
            id:1,
            text: "Привет",
            name: "Валерий Цепкало",
            img: "https://officelife.media/upload/iblock/a67/a673bdc2396a44e83b19b8a1665800d0.jpg"
        },
        {
            id:2,
            text: "Как дела?",
            name: "Валерий Цепкало",
            img: "https://officelife.media/upload/iblock/a67/a673bdc2396a44e83b19b8a1665800d0.jpg"
        },
        {
            id:3,
            text: "Что нового?",
            name: "Валерий Цепкало",
            img: "https://officelife.media/upload/iblock/a67/a673bdc2396a44e83b19b8a1665800d0.jpg"
        }
    ],
    newPostText: "Heee",
    photo:'',
    status:"",
};

const ProfilePageReducer = (state = initialState, action ) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            }

        }
        case ADD_NEW_POST_TEXT: {

            let newPostText = {
                id:5,
                text:state.newPostText,
                name: "Валерий Цепкало",
                img: "https://officelife.media/upload/iblock/a67/a673bdc2396a44e83b19b8a1665800d0.jpg"
            };
            return {
                ...state,
                profilePage: [...state.profilePage, newPostText],
                newPostText: ""
            }
        }
        case SET_PHOTO_USER: {
            return {
                ...state,
                photo:action.photo
            }
        }
        case SET_STATUS_USER: {
            return {
                ...state,
                status:action.status
            }
        }
        default: return state;
    }



};

export const setPhotoUser = (photo) => ({type: SET_PHOTO_USER, photo});
export const setStatusUser = (status) => ({type: SET_STATUS_USER, status});

export const getStatusThunk = (status) => {
    return (dispatch) => {
        getStatus(status).then(response => {
            dispatch(setStatusUser(response))

        })
    }
};

/*export const followUserThunk = (id) => {
    return (dispatch) => {
        dispatch(isDisabled(true, id))
        followUser(id).then(response => {
            if (response == 0) {
                dispatch(follow(id))
            }
            dispatch(isDisabled(false, id))
        })
    }
};*/

export default ProfilePageReducer;