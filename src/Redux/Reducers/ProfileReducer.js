import {ADD_NEW_POST_TEXT, UPDATE_NEW_POST_TEXT} from "../ActionTypes";

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
        default: return state;
    }



};

export const setPhotoUser = (photo) => ({type: SET_PHOTO_USER, photo});

export default ProfilePageReducer;