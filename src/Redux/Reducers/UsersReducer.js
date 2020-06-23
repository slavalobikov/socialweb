import {ADD_NEW_POST_TEXT, FOLLOW_USER, FollowAC, UNFOLLOW_USER, UPDATE_NEW_POST_TEXT} from "../ActionTypes";


let initialState = {
    users:[
        {
            id:1,
            name: "Валерий Цепкало",
            img: "https://officelife.media/upload/iblock/a67/a673bdc2396a44e83b19b8a1665800d0.jpg",
            isFollow:true,
        },

        {
            id:2,
            name: "Кто то там ",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRu2LBJjEsly0ymeCNQw6XuoPorW7GZ4fGavSDeD-KZo9MT4l43&usqp=CAU",
            isFollow:false,
        },

    ],

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
        default: return state;
    }



};

export default UsersPageReducer;