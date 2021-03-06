import {authAPI} from "../api/api";


const SET_USER_DATA = 'samurai-social/auth/SET_USER_DATA'
const SET_ERROR = 'samurai-social/auth/SET_ERROR'
const IS_LOADING = 'samurai-social/auth/IS_LOADING'

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	errorMessage: [],
	isLoading: false,
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
		case IS_LOADING:
			return {
				...state,
				isLoading: action.isLoading
			}

		default:
			return state
	}
}

export const setAuthUserData = (userId, email, login, isAuth) =>
	({type: SET_USER_DATA, payload: {userId,email,login, isAuth}})
export const setErrorMessage = (errorMessage) =>
	({type: SET_ERROR, errorMessage})
const isLoading=(isLoading)=>
	({type: IS_LOADING, isLoading})

export const getAuthUserData = () =>async (dispatch) => {
	let response = await authAPI.getAuth();
	if (response.resultCode === 0) {
		let {id, login, email} = response.data
		dispatch(setAuthUserData(id, email, login, true))
	}}

export const login = (email, password, rememberMe) => async (dispatch) => {
	dispatch(isLoading(true))
	let response = await authAPI.login(email, password, rememberMe)
	if (response.resultCode === 0) {
		dispatch(getAuthUserData())
		dispatch(isLoading(false))
		dispatch(setErrorMessage([]))
	} else {
		dispatch(setErrorMessage(response.messages))
		dispatch(isLoading(false))
	}}

export const logout = () => async (dispatch) => {
	let response = await authAPI.logout()
	if (response.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false))
	}}

export default authReducer;