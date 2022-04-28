import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePages: {
            postData: [
                {id:1, message:'Hi, how are you?', like: 3},
                {id:2, message:'Its my first post', like: 4}
            ],
            newPostText: '',
        },
        messagesPages: {
            messagesData: [
                {id:1, message: 'HI'},
                {id:2, message: 'How are you?'},
                {id:3, message: 'Ruslan'},
            ],
            dialogsData: [
                {id:1, name: 'Ruslan'},
                {id:2, name: 'Roman'},
                {id:3, name: 'Elina'},
                {id:4, name: 'Victor'},
                {id:5, name: 'Dmitriy'},
                {id:6, name: 'Aleksey'},
            ],
            newMessageBody: '',
        },
        sitebar: {
            userList: [
                {id:1, name: 'Ruslan'},
                {id:2, name: 'Roman'},
                {id:3, name: 'Elina'},
                {id:4, name: 'Victor'},
                {id:5, name: 'Dmitriy'},
                {id:6, name: 'Aleksey'},
            ]
        }
    },
    _callSubscriber() {
        console.log('state change')
    },

    getState() {
      return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer       //observer addEventListener паттерны
    },

    dispatch(action) { // type: 'ADD-POST'
        this._state.profilePages = profileReducer(this._state.profilePages, action)
        this._state.messagesPages = dialogsReducer(this._state.messagesPages, action)
        this._state.sitebar = sidebarReducer(this._state.sitebar, action)

        this._callSubscriber(this._state)
    }
}

export default store
window.store = store