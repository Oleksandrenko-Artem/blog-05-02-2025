import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPosts, getOnePost, getAllCommentsByPost, getAllPostsByUser, getAllTags, getAllPostsByTag, searchPosts } from "../api";

export const searchPostsAsync = createAsyncThunk(
    'posts/searchPostsAsync',
    async(args, thunkAPI) => {
        try {
            const responce = await searchPosts(args);
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.message || 'Posts not exists');
        }
    }
)
export const getAllPostsByTagAsync = createAsyncThunk(
    'posts/getAllPostsByTagAsync',
    async (args, thunkAPI) => {
        try {
            const responce = await getAllPostsByTag(args);
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.message || 'Posts not exists');
        }
    }
)
export const getAllTagsAsync = createAsyncThunk(
    'posts/getAllTagsAsync',
    async (args, thunkAPI) => {
        try {
            const responce = await getAllTags(args);
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.message || 'Tags not exists'); 
        }
    }
);
export const getAllPostsByUserAsync = createAsyncThunk(
    'posts/getAllPostsByUserAsync',
    async (id, thunkAPI) => {
        try {
            const responce = await getAllPostsByUser(id);
            return responce.data.posts;
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.message || 'Posts not exists');
        }
    }
);
export const getAllPostsAsync = createAsyncThunk(
    'posts/getAllPostsAsync',
    async (args, thunkAPI) => {
        try {
            const responce = await getAllPosts(args);
            return responce.data;
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
export const getAllCommentsByPostAsync = createAsyncThunk(
    'posts/getAllCommentsByPostAsync',
    async (id, thunkAPI) => {
        try {
            const response = await getAllCommentsByPost(id);
            return response.data.comments;
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.message || 'Comments not exists')
        }
    }
);
const setPending = (state) => {
    state.isPending = true;
};
const setRejected = (state, action) => {
    state.isPending = false;
    state.error = action.payload;
}
const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        total: 0,
        postsByUser: [],
        selectedPost: null,
        comments: [],
        tags: [],
        error: null,
        isPending: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(searchPostsAsync.pending, setPending)
        builder.addCase(searchPostsAsync.fulfilled, (state, action) => {
            state.isPending = false;
            state.posts = action.payload.posts;
            state.total = action.payload.total;
        })
        builder.addCase(searchPostsAsync.rejected, setRejected)
        builder.addCase(getAllPostsByTagAsync.pending, setPending)
        builder.addCase(getAllPostsByTagAsync.fulfilled, (state, action) => {
            state.isPending = false;
            state.posts = action.payload.posts;
            state.total = action.payload.total;
        })
        builder.addCase(getAllPostsByTagAsync.rejected, setRejected)
        builder.addCase(getAllTagsAsync.pending, setPending)
        builder.addCase(getAllTagsAsync.fulfilled, (state, action) => {
            state.isPending = false;
            state.tags = action.payload;
        })
        builder.addCase(getAllTagsAsync.rejected, setRejected)
        builder.addCase(getAllPostsByUserAsync.pending, setPending)
        builder.addCase(getAllPostsByUserAsync.fulfilled, (state, action) => {
            state.isPending = false;
            state.postsByUser = action.payload;
        })
        builder.addCase(getAllPostsByUserAsync.rejected, setRejected)
        builder.addCase(getAllPostsAsync.pending, (state) => {
            state.isPending = true;
        })
        builder.addCase(getAllPostsAsync.fulfilled, (state, action) => {
            state.isPending = false;
            state.posts = action.payload.posts;
            state.total = action.payload.total;
        })
        builder.addCase(getAllPostsAsync.rejected, (state, action) => {
            state.isPending = false;
            state.error = action.payload;
        })
        builder.addCase(getOnePostAsync.pending, setPending)
        builder.addCase(getOnePostAsync.fulfilled, (state, action) => {
            state.isPending = false;
            state.selectedPost = action.payload;
        })
        builder.addCase(getOnePostAsync.rejected, setRejected)
        builder.addCase(getAllCommentsByPostAsync.pending, setPending)
        builder.addCase(getAllCommentsByPostAsync.fulfilled, (state, action) => {
            state.isPending = false;
            state.comments = action.payload;
        })
        builder.addCase(getAllCommentsByPostAsync.rejected, setRejected)
    }
});

export default postsSlice.reducer;