import {ADD_NEW_POST_TEXT} from "../ActionTypes";
import {  profileAPI} from "../../api/api";
import {isFetchingFalse, isFetchingTrue} from "./UsersReducer";

const SET_STATUS_USER = "SET_STATUS_USER";

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
    photo:'',
    status:"",
};

const ProfilePageReducer = (state = initialState, action ) => {
    switch (action.type) {
        case ADD_NEW_POST_TEXT: {

            let newPostText = {
                id:5,
                text:action.text,
                name: "Валерий Цепкало",
                img: "https://officelife.media/upload/iblock/a67/a673bdc2396a44e83b19b8a1665800d0.jpg"
            };
            return {
                ...state,
                profilePage: [...state.profilePage, newPostText],
                newPostText: action.text,

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

export const getStatusThunk = (status) => async (dispatch) => {
        let response = await profileAPI.getStatus(status);
            dispatch(setStatusUser(response))
};

export const getProfileThunk = (userID) => async (dispatch) => {
        dispatch(isFetchingTrue());
        let response = await profileAPI.getProfile(userID);
            dispatch(setPhotoUser(response.photos.large));
            dispatch(isFetchingFalse());
            dispatch(getStatusThunk(userID))
};

export const updateStatusThunk = (status) => async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
            if (response.data.resultCode === 0) {
                dispatch(setStatusUser(status))
            }
};


export default ProfilePageReducer;