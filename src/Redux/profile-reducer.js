import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_LOADING_PROFILE ='SET_LOADING_PROFILE';
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

let initialState = {
    postData: [
        {id:1, message:'Hi, how are you?', like: 3},
        {id:2, message:'Its my first post', like: 4}
    ],
    profile: null,
    isLoadingProfile: false,
    status: ''
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postData: [{
                    id: 5,
                    message: action.postText,
                    like: 0
                },...state.postData]
            }
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(p=>p.id !== action.postId)
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_LOADING_PROFILE:
            return {
                ...state, isLoadingProfile: action.loading
            }
        case SET_STATUS:
            return  {
                ...state, status: action.status
            }
        default:
            return state
    }
}

export const addPost = (postText) => ({type: ADD_POST, postText});
export const deletePost = (postId) => ({type: DELETE_POST, postId})

const setUserProfile = (profile) =>
  ({type: SET_USER_PROFILE, profile})

const setLoadingProfile = (loading) =>
    ({type: SET_LOADING_PROFILE, loading})
const setStatus = (status) =>
  ({type: SET_STATUS, status})


export const getUserProfile = (userId) => async (dispatch) => {
    dispatch(setLoadingProfile(true))
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response))
    dispatch(setLoadingProfile(false))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))

}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }

}

export default profileReducer