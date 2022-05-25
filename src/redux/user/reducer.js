import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        email: null,
        token: null,
        id: null,
        login: null
    },
    reducers: {
       setUser: (state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        setLogin:(state, action) => {
            state.login = action.payload;
        },
        deleteUser: (state) => {
            state.email = null;
            state.token = null;
            state.id = null;
            state.login = null
        }
    }
})

export const {setUser,deleteUser,setLogin} = userSlice.actions; 
export default userSlice.reducer; 