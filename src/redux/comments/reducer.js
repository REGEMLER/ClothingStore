import { createSlice } from "@reduxjs/toolkit";
import { fetchComments } from "./ActionCreator";

const commentsSlice = createSlice({
    name: "comments",
    initialState:{
        comments:[],
        userComments:[],
        isLoading: false,
        error: ""
    },
    extraReducers: {
        [fetchComments.pending]: (state) => {
            state.isLoading = true;
            state.error = "";
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.comments = action.payload; 
        },
        [fetchComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
    reducers:{
        setComment: (state,action) => {
            state.userComments.push(action.payload);
        },
        deleteComment: (state, action) => {
            state.userComments = state.userComments.filter(item => item.id !==action.payload);
        }
    }
})

export const {setComment,deleteComment} = commentsSlice.actions; 
export default commentsSlice.reducer; 