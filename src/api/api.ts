import axios from "axios";
import { ProfileType } from "../Types/types";



const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "be820c73-af0b-4ffa-9553-5bd0d04425d6"
    }
})




export const userAPI = {
    getUsers(currentPage = 1, pageSize : number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })

    },
    followUser(userID : number) {
        return instance.post(`follow/${userID}`).then(response => {
            return response.data.resultCode
        })
    },
    unfollowUser(userID : number) {
        return instance.delete(`follow/${userID}`).then(response => {
            return response.data.resultCode
        })
    }

};

export enum ResultCode {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10,
}

type MeResponseType = {
    data: {
        id: number,
        email: string,
        login: string
    },
    resultCode: ResultCode,
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userId:number,
    }
    resultCode: ResultCode,
    messages: Array<string>
}

export const authAPI  = {
    authme() {
        return instance.get<MeResponseType>(`auth/me`).then(response => {
            return response.data
        })
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post<LoginResponseType>(`auth/login` , {email, password, rememberMe} ).then(res => {
            return res.data
        })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
};


export const profileAPI = {
    getStatus(userID: number) {
        return instance.get(`profile/status/${userID}`).then (response => {
            return response.data
        })
    },
    getProfile(userID: number){
        return instance.get(`profile/${userID}`).then(response => {
            return response.data
        })
    },
    updateStatus(setStatus:string) {
        return instance.put(`profile/status`, {status: setStatus}).then(response =>{
            return response
        })
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile (profile: ProfileType) {
        return instance.put(`profile`, profile);
    }
};