
let initialState = {
    users: [
        {
            id: 1,
            name: 'Светозар Трубецкой',
            img: 'https://img04.rl0.ru/4c3a6c57c2a08a723214ba61ff9b2aef/c615x400i/news.rambler.ru/img/2017/08/31115059.047592.2664.jpeg'
        },
        {id: 2, name: 'Милица Голицына', img: 'https://pbs.twimg.com/profile_images/811139177341485056/hvSO9ut1.jpg'},
        {
            id: 3,
            name: 'Любомир Ягужинский',
            img: 'https://storage.myseldon.com/news_pict_05/05E7E5C9CE6AA09669C839A987C3080C'
        },
        {
            id: 4,
            name: 'Добрыня Алтуфьев',
            img: 'https://sun9-33.userapi.com/impf/c638418/v638418588/4a9e7/PUUC3W2ihCA.jpg?size=400x0&quality=90&sign=b34a698aa4dfc7fc4851449f08824abb&ava=1'
        },
    ],
    messages: [
        {a:[{id: 1, message: 'Привет приятель!', isYou: false},
                {id: 2, message: 'Приветсвую))', isYou: true},
                {id: 3, message: 'Как делишки?', isYou: true},
                {id: 4, message: 'Ну такое....', isYou: false},
                {id: 5, message: 'А что случилось?', isYou: true},
                {id: 6, message: 'В школе двойку получил:(', isYou: false},
                {id: 7, message: 'Ну не растраивайся, все норм будет!', isYou: true},
                {id: 8, message: 'Ну не растраивайся, все норм будет!', isYou: false},
            ]},
        {a:[{id: 1, message: '2edsfd', isYou: false},
                {id: 2, message: 'dfdf dfdf dsd it-sdsd?', isYou: true},
                {id: 3, message: 'fddfdf', isYou: true},
                {id: 4, message: 'dffdf', isYou: false},
                {id: 5, message: 'dfdfdf', isYou: true},]},
        {a:[{id: 1, message: 'dfdfdfdfdfd', isYou: false},
                {id: 2, message: 'dfdf is dsd dfdf-sdsd?', isYou: true},
                {id: 3, message: 'qwq   wewe', isYou: true},
                {id: 4, message: 'fdfdfdf', isYou: false},
                {id: 5, message: 'fdf', isYou: true},]},
        {a:[{id: 1, message: 'l;kwe;lmlksmd', isYou: false},
                {id: 2, message: 'Hdsow is dsd it-wewe?', isYou: true},
                {id: 3, message: 'dfdf', isYou: true},
                {id: 4, message: 'dfdf', isYou: false},
                {id: 5, message: 'ewdsdsd', isYou: true},]},
    ],

};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};




export default dialogsReducer;