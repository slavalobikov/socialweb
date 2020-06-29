import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfilePageReducer from "./Reducers/ProfileReducer";
import UsersPageReducer from "./Reducers/UsersReducer";
import AuthPageReducer from "./Reducers/AuthReducer";

let reducers = combineReducers({
    ProfilePageReducer,
    UsersPageReducer,
    AuthPageReducer,
});


let store = createStore(reducers);

window.store = store;

export default store;