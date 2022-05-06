import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePages: profileReducer,
    messagesPages: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers)




export default store
window.store = store