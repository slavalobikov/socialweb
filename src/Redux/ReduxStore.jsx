import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfilePageReducer from "./Reducers/ProfileReducer";
import UsersPageReducer from "./Reducers/UsersReducer";

let reducers = combineReducers({
    ProfilePageReducer,
    UsersPageReducer
});


let store = createStore(reducers);

window.store = store;

export default store;