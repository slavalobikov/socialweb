import * as axios from "axios";

let URL = 'https://social-network.samuraijs.com/api/1.0/';



/*
export const getUsers = (currentPage = 1, pageSize) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
          return response.data
        });

};*/

export const getUsers = (currentPage = 1, pageSize) => {
    return axios.get(`${URL}users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        });

};

export const getProfile = (userID) => {
    return axios.get(`${URL}profile/${userID}`).then(response => {
        return response.data
    })
};
