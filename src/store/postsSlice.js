import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPosts, getOnePost } from "../api";

export const getAllPostsAsync = createAsyncThunk(
    'posts/getAllPostsAsync',
    async (args, thunkAPI) => {
        try {
            const responce = await getAllPosts(args);
            return responce.data.posts;
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.message || 'Posts not exists');
        }
    }
);
export const getOnePostAsync = createAsyncThunk(
    'posts/getOnePostAsync',
    async (id, thunkAPI) => {
        try {
            const responce = await getOnePost(id);
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.message || 'Post not exists');
        }
    }
);
const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        selectedPost: null,
        error: null,
        isPending: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllPostsAsync.pending, (state) => {
            state.isPending = true;
        })
        builder.addCase(getAllPostsAsync.fulfilled, (state, action) => {
            state.isPending = false;
            state.posts = action.payload;
        })
        builder.addCase(getAllPostsAsync.rejected, (state, action) => {
            state.isPending = false;
            state.error = action.payload;
        })
        builder.addCase(getOnePostAsync.pending, (state) => {
            state.isPending = true;
        })
        builder.addCase(getOnePostAsync.fulfilled, (state, action) => {
            state.isPending = false;
            state.selectedPost = action.payload;
        })
        builder.addCase(getOnePostAsync.rejected, (state, action) => {
            state.isPending = false;
            state.error = action.payload;
        })
    }
});

export default postsSlice.reducer;