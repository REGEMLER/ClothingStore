import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk(
    `comments/fetchUsers`,
    async () => {
        try {
            const responce = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
            const data = await responce.json();
            return data;
        } catch (e) {
            return e.message;
        }
    }
)