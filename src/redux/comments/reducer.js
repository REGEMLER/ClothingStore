import { createSlice } from "@reduxjs/toolkit";
import { fetchComments } from "./ActionCreator";

const commentsSlice = createSlice({
    name: "comments",
    initialState:{
        comments:[],
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
    }
})

export const {} = commentsSlice.actions; 
export default commentsSlice.reducer; 