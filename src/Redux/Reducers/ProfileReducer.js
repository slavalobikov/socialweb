import {UPDATE_NEW_POST_TEXT} from "../ActionTypes";


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
    newPostText: "Heee"
};

const ProfilePageReducer = (state = initialState, action ) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {


            return {
                ...state,
                newPostText: action.text
            }


        }
        default: return state;
    }


};

export default ProfilePageReducer;