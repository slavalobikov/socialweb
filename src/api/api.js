import * as axios from "axios";

let URL = 'https://social-network.samuraijs.com/api/1.0/';


const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "be820c73-af0b-4ffa-9553-5bd0d04425d6"
    }
})


/*
export const getUsers = (currentPage = 1, pageSize) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
          return response.data
        });

};*/

export const getUsers = (currentPage = 1, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        });

};

export const getProfile = (userID) => {
    return instance.get(`profile/${userID}`).then(response => {
        return response.data
    })
};

export const getPhotoAuth = (uID) => {
    return instance.get(`profile/${uID}`).then(response => {
        return response.data
    })
};

export const authme = () => {
    return instance.get(`auth/me`).then(response => {
        return response.data
    })
};

export const followUser = (userID) => {
    return instance.post(`follow/${userID}`).then(response => {
        debugger
        return response.data.resultCode
    })
};

export const unfollowUser = (userID) => {
    return instance.delete(`follow/${userID}`)
};


/*
export const postFriend = (id) => {
    return instance.post(`follow/${id}`)
        .then (response => {
            return response.data.resultCode
        })
    }*/
