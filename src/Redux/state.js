
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
        if(action.type === 'ADD-POST') {
            let  newPost = {
                id: 5,
                message: this._state.profilePages.newPostText,
                like: 0
            };
            this._state.profilePages.postData.unshift(newPost)
            this._state.profilePages.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePages.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }
}

export default store
window.store = store