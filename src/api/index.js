import axios from "axios";
import queryString from "query-string";

const httpClient = axios.create({
    baseURL: 'https://dummyjson.com/',
});
// users
export const loginUser = (dataUser) => httpClient.post('/auth/login', dataUser);

export const getAllUsers = (options) => {
    // options = { limit:2, skip:4 }
    const query = queryString.stringify(options);
    // query = 'limit=2&skip=4'
    return httpClient.get(`/users?${query}`);
}

export const getOneUser = (id) => httpClient.get(`/users/${id}`);
// posts
export const getAllPosts = (options) => {
    const query = queryString.stringify(options);
    return httpClient.get(`/posts?${query}`);
}

export const getOnePost = (id) => httpClient.get(`/posts/${id}`);

// comments by one post
export const getAllCommentsByPost = (id) => httpClient.get(`/comments/post/${id}`);

// all posts by user id
export const getAllPostsByUser = (id) => httpClient.get(`/posts/user/${id}`);

// all tags
export const getAllTags = () => httpClient.get('/posts/tag-list');

// all posts by tag
// add querystring
export const getAllPostsByTag = (options) => {
    const { tagName, ...restParams } = options; // restParams = { limit:2, skip:4 }
    const query = queryString.stringify(restParams); // query = 'limit=2&skip=4'
    return httpClient.get(`/posts/tag/${tagName}?${query}`);
}

// search
export const searchPosts = (options) => {
    const query = queryString.stringify(options);
    return httpClient.get(`/posts/search?${query}`);
}