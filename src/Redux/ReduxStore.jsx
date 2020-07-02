import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import ProfilePageReducer from "./Reducers/ProfileReducer";
import UsersPageReducer from "./Reducers/UsersReducer";
import AuthPageReducer from "./Reducers/AuthReducer";
import { reducer as formReducer  } from  "redux-form"

let reducers = combineReducers({
    ProfilePageReducer,
    UsersPageReducer,
    AuthPageReducer,
    form:formReducer,
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;