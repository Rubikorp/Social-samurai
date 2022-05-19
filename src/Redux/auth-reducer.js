import {authAPI} from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA'
const SET_ERROR = 'SET_ERROR'

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	errorMessage: []
}

const authReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload
			}
		case SET_ERROR:
			return {
				...state,
				errorMessage: action.errorMessage
			}

		default:
			return state
	}
}

export const setAuthUserData = (userId, email, login, isAuth) =>
	({type: SET_USER_DATA, payload: {userId,email,login, isAuth}})
export const setErrorMessage = (errorMessage) =>
	({type: SET_ERROR, errorMessage})

export const getAuthUserData = () => (dispatch) => {
	authAPI.getAuth().then(data=> {
			if (data.resultCode === 0) {
				let {id, login, email} = data.data
				dispatch(setAuthUserData(id, email, login, true))
			}})}

export const login = (email, password, rememberMe) => (dispatch) => {
	authAPI.login(email, password, rememberMe).then(data=> {
			if (data.resultCode === 0) {
				dispatch(getAuthUserData())
			} else {
				dispatch(setErrorMessage(data.messages))
			}})}

export const logout = () => (dispatch) => {
	authAPI.logout().then(data=> {
			if (data.resultCode === 0) {
				dispatch(setAuthUserData(null, null, null, false))
			}})}

export default authReducer;