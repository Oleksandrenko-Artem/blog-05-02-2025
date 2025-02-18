import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers } from "../api";

export const getAllUsersAsync = createAsyncThunk('users/getAllUsersAsync',
    async (args, thunkAPI) => {
        try {
            const response = await getAllUsers();
            return response.data.users;
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.message || 'Users not exists');
        }
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        error: null,
        isPending: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllUsersAsync.pending, (state) => {
            state.isPending = true;
        });
        builder.addCase(getAllUsersAsync.fulfilled, (state, action) => {
            state.isPending = false;
            state.users = action.payload;
        });
        builder.addCase(getAllUsersAsync.rejected, (state, action) => {
            state.isPending = false;
            state.error = action.payload;
        });
    }
})

export default usersSlice.reducer;