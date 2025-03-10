import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import usersReducer from "./usersSlise";
import postsReducer from "./postsSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        users: usersReducer,
        posts: postsReducer,
    },
});

export default store;