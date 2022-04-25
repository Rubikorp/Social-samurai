let state = {
    profilePages: {
        postData: [
            {id:1, message:'Hi, how are you?', like: 3},
            {id:2, message:'Its my first post', like: 4}
        ],
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

export let addPost = (postMessage) => {
    let  newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
    };
    state.profilePages.postData.push(newPost)
}

export default state