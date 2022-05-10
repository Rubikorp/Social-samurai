import * as axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "07434d35-0284-4cb3-9b9e-6f06eb91fe0b"
	}
});

export const userAPI = {
	getUsers(currentPage =1, pageSize=10) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return (response.data)
			});
	},
	deleteFollowUser(userId) {
		return instance.delete(`follow/${userId}`)
			.then(responce => {
			return (responce.data)
			});
	},
	postFollowUser(userId) {
		return instance.post(`follow/${userId}`)
			.then(responce => {
				return (responce.data)
			});
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
			.then(response => {
				return(response.data)
			})
	},
	getStatus(userId) {
		debugger;
		return instance
			.get(`profile/status/`+userId)
			.then(response => {
				return (response.data)
			})
	},
	updateStatus(status) {
		return instance
			.put(`profile/status`, {status:status})
	}
}

export const authAPI = {
	getAuth() {
		return instance.get(`auth/me`).then(response=>{
			return(response.data)
		})
	}
}
