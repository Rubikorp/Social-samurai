import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_LOADING_PROFILE ='SET_LOADING_PROFILE';
const SET_STATUS = 'SET_STATUS'

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

const setUserProfile = (profile) =>
  ({type: SET_USER_PROFILE, profile})

const setLoadingProfile = (loading) =>
    ({type: SET_LOADING_PROFILE, loading})
const setStatus = (status) =>
  ({type: SET_STATUS, status})


export const getUserProfile = (userId) => (dispatch) => {
    dispatch(setLoadingProfile(true))
    profileAPI.getProfile(userId).then( data => {
        dispatch(setUserProfile(data))
        dispatch(setLoadingProfile(false))
      }
    )
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data=>{
            dispatch(setStatus(data))
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
      })
}

export default profileReducer