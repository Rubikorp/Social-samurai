let rerenderEntireTree = () => {

}


let state = {
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
}

export const addPost = () => {
    let  newPost = {
        id: 5,
        message: state.profilePages.newPostText,
        like: 0
    };
    state.profilePages.postData.unshift(newPost)
    state.profilePages.newPostText = ''
    rerenderEntireTree()
}

export const updateNewPostText = (newText) => {
    state.profilePages.newPostText = newText;
    rerenderEntireTree()
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer       //observer addEventListener паттерны
}


export default state