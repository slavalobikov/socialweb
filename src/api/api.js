import * as axios from "axios";

let URL = 'https://social-network.samuraijs.com/api/1.0/';


const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "be820c73-af0b-4ffa-9553-5bd0d04425d6"
    }
})




export const userAPI = {
    getUsers(currentPage = 1, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })

    },
    followUser(userID) {
        return instance.post(`follow/${userID}`).then(response => {
            return response.data.resultCode
        })
    },
    unfollowUser(userID) {
        return instance.delete(`follow/${userID}`).then(response => {
            return response.data.resultCode
        })
    }

};

export const authAPI  = {
    authme() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login` , {email, password, rememberMe} )
    }
};


export const profileAPI = {
    getStatus(userID) {
        return instance.get(`profile/status/${userID}`).then (response => {
            return response.data
        })
    },
    getProfile(userID){
        return instance.get(`profile/${userID}`).then(response => {
            return response.data
        })
    },
    updateStatus(setStatus) {
        return instance.put(`profile/status`, {status: setStatus}).then(response =>{
            return response
        })
    }
};