import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfilePageReducer from "./Reducers/ProfileReducer";

let reducers = combineReducers({
    ProfilePageReducer
});


let store = createStore(reducers);

window.store = store;

export default store;