import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers, getOneUser } from "../api";

export const getAllUsersAsync = createAsyncThunk('users/getAllUsersAsync',
    async (args, thunkAPI) => {
        try {
            const response = await getAllUsers(args);
            return response.data.users;
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.message || 'Users not exists');
        }
    }
);

export const getOneUserAsync = createAsyncThunk('users/getOneUserAsync',
    async (id, thunkAPI) => {
        try {
            const response = await getOneUser(id);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.message || 'User not exists');
        }
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        selectedUser: null,
        error: null,
        isPending: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllUsersAsync.fulfilled, (state, action) => {
            state.isPending = false;
            state.users = action.payload;
        });
        builder.addCase(getAllUsersAsync.rejected, (state, action) => {
            state.isPending = false;
            state.error = action.payload;
        });
        builder.addCase(getOneUserAsync.pending, (state) => {
            state.isPending = true;
        });
        builder.addCase(getOneUserAsync.fulfilled, (state, action) => {
            state.isPending = false;
            state.selectedUser = action.payload;
        });
        builder.addCase(getOneUserAsync.rejected, (state, action) => {
            state.isPending = false;
            state.error = action.payload;
        });
    }
})

export default usersSlice.reducer;