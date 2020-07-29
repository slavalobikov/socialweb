const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    users: [
        {id: 1, name: 'Светозар Трубецкой', img:'https://img04.rl0.ru/4c3a6c57c2a08a723214ba61ff9b2aef/c615x400i/news.rambler.ru/img/2017/08/31115059.047592.2664.jpeg'},
        {id: 2, name: 'Милица Голицына', img:'https://pbs.twimg.com/profile_images/811139177341485056/hvSO9ut1.jpg'},
        {id: 3, name: 'Любомир Ягужинский', img:'https://storage.myseldon.com/news_pict_05/05E7E5C9CE6AA09669C839A987C3080C'},
        {id: 4, name: 'Добрыня Алтуфьев', img:'https://sun9-33.userapi.com/impf/c638418/v638418588/4a9e7/PUUC3W2ihCA.jpg?size=400x0&quality=90&sign=b34a698aa4dfc7fc4851449f08824abb&ava=1'},
    ],
/*    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],*/
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

/*
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})
*/


export default dialogsReducer;