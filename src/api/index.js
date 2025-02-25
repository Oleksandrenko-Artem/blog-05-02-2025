import axios from "axios";
import queryString from "query-string";

const httpClient = axios.create({
    baseURL: 'https://dummyjson.com/',
});

export const loginUser = (dataUser) => httpClient.post('/auth/login', dataUser);

export const getAllUsers = (options) => {
    // options = { limit:2, skip:4 }
    const query = queryString.stringify(options);
    // query = 'limit=2&skip=4'
    return httpClient.get(`/users?${query}`);
}

export const getOneUser = (id) => httpClient.get(`/users/${id}`);