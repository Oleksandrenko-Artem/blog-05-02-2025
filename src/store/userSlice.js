import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../api";

export const loginUserAuth = createAsyncThunk('user/loginUserAuth',
    async (userData, thunkAPI) => { 
        try {
            const responce = await loginUser(userData);
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.message || 'Login failed.');
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        error: null,
        isPending: false,
    },
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        clearUser: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUserAuth.pending, (state) => {
            state.isPending = true;
        });
        builder.addCase(loginUserAuth.fulfilled, (state, action) => {
            state.isPending = false;
            state.user = action.payload;
        });
        builder.addCase(loginUserAuth.rejected, (state, action) => {
            state.isPending = false;
            state.error = action.payload;
        });
    },
});

export const { clearError, clearUser } = userSlice.actions;

export default userSlice.reducer;