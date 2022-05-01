const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id:1, message:'Hi, how are you?', like: 3},
        {id:2, message:'Its my first post', like: 4}
    ],
    newPostText: '',
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                postData: [{
                    id: 5,
                    message: state.newPostText,
                    like: 0
                },...state.postData]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}

export const addPostCreator = () => ({type: ADD_POST});

export const updateNewPostTextCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer