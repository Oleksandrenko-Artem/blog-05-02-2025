import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import usersReducer from "./usersSlise";

const store = configureStore({
    reducer: {
        user: userReducer,
        users: usersReducer,
    },
});

export default store;