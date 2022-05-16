import * as axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "56386e13-608e-4b80-bcff-22e2fc1833c7"
	}
});

export const userAPI = {
	getUsers(currentPage =1, pageSize=10) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => (response.data));
	},
	deleteFollowUser(userId) {
		return instance.delete(`follow/${userId}`)
			.then(responce => (responce.data));
	},
	postFollowUser(userId) {
		return instance.post(`follow/${userId}`)
			.then(responce => (responce.data));
	},
	getProfile(userId) {
		console.warn('Obsolete method. Please profileAPI object.')
		return profileAPI.getProfile(userId)
	}
}

export const profileAPI = {
	getProfile(userId) {
		return instance
			.get(`profile/`+ userId)
			.then(response => (response.data))
	},
	getStatus(userId) {
		return instance
			.get(`profile/status/`+userId)
			.then(response => (response.data))
	},
	updateStatus(status) {
		return instance
			.put(`profile/status`, {status:status})
	}
}

export const authAPI = {
	getAuth() {
		return instance.get(`auth/me`).then(response=>(response.data)
		)},
	login(email, password, rememberMe=false, captcha = true) {
		return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(response=>(response.data)
		)},
	logout() {
		return instance.delete(`auth/login`).then(response=>(response.data)
		)}}
