
let store = {
    _state: {
        profilePages: {
            postData: [
                {id:1, message:'Hi, how are you?', like: 3},
                {id:2, message:'Its my first post', like: 4}
            ],
            newPostText: 'Привет, напиши на мне',
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
            ]
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
    _rerenderEntireTree() {
        console.log('state change')
    },
    getState() {
      return this._state
    },
    addPost() {
        let  newPost = {
            id: 5,
            message: this._state.profilePages.newPostText,
            like: 0
        };
        this._state.profilePages.postData.unshift(newPost)
        this._state.profilePages.newPostText = ''
        this._rerenderEntireTree(this._state)
    },

    updateNewPostText(newText) {
        this._state.profilePages.newPostText = newText;
        this._rerenderEntireTree(this._state)
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer       //observer addEventListener паттерны
    }
}

export default store
window.store = store