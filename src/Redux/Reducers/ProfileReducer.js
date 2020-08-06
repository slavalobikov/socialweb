import {ADD_NEW_POST_TEXT} from "../ActionTypes";
import {profileAPI} from "../../api/api";
import {isFetching} from "./UsersReducer";

const SET_STATUS_USER = "SET_STATUS_USER";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PHOTO_USER = 'SET_PHOTO_USER';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
let initialState = {

    profilePage: [
        {
            id: 1,
            text: "Привет",
            name: "Валерий Цепкало",
            img: "https://officelife.media/upload/iblock/a67/a673bdc2396a44e83b19b8a1665800d0.jpg"
        },
        {
            id: 2,
            text: "Как дела?",
            name: "Валерий Цепкало",
            img: "https://officelife.media/upload/iblock/a67/a673bdc2396a44e83b19b8a1665800d0.jpg"
        },
        {
            id: 3,
            text: "Что нового?",
            name: "Валерий Цепкало",
            img: "https://officelife.media/upload/iblock/a67/a673bdc2396a44e83b19b8a1665800d0.jpg"
        }
    ],
    photo: '',
    status: "",
    profile: null,

};
const ProfilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST_TEXT: {

            let newPostText = {
                id: 5,
                text: action.text,
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
                photo: action.photo
            }
        }
        case SET_STATUS_USER: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS:
            return {...state, photo: action.photos};
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }


        default:
            return state;
    }


};

export const setPhotoUser = (photo) => ({type: SET_PHOTO_USER, photo});
export const setStatusUser = (status) => ({type: SET_STATUS_USER, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getStatusThunk = (id) => async (dispatch) => {
    let response = await profileAPI.getStatus(id);
    dispatch(setStatusUser(response))
};

export const getProfileThunk = (userID) => async (dispatch) => {
    dispatch(isFetching(true));
    let response = await profileAPI.getProfile(userID);
    dispatch(setPhotoUser(response.photos.large));
    dispatch(setUserProfile(response));
    dispatch(getStatusThunk(userID));
    dispatch(isFetching(false))
};

export const updateStatusThunk = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatusUser(status))
    }
};
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userID = getState().AuthPageReducer.id;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getProfileThunk(userID))
    } else {
        alert(`Ошибка в валидации: ' ${response.data.messages.map(e => e)}`)

        /*
                dispatch(isFetching(true));
        */
    }
};
/*export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getProfileThunk(userId));
    } else {
        /!*dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);*!/
    }
};*/

export default ProfilePageReducer;