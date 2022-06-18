import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "messege",
    initialState: {
        email: null,
        body: null,
        id: null,
        uid: null,
        name: null
    },
    reducers: {
        setMessage: (state, action) => {
            state.email = action.payload.email;
            state.body = action.payload.body;
            state.id = action.payload.id;
            state.uid = action.payload.uid;
            state.name = action.payload.name;
        },
        deleteMessage: (state) => {
            state.email = null;
            state.body = null;
            state.id = null;
            state.uid = null;
            state.name = null; 
        }
    }
})

export const { setMessage, deleteMessage } = messageSlice.actions;
export default messageSlice.reducer; 