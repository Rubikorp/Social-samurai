const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postData: [
        {id:1, message:'Hi, how are you?', like: 3},
        {id:2, message:'Its my first post', like: 4}
    ],
    newPostText: '',
    profile: null,
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
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        default:
            return state
    }
}

export const addPost = () => ({type: ADD_POST});

export const onPostChange = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text})

export const setUserProfile = (profile) =>
  ({type: SET_USER_PROFILE, profile})

export default profileReducer