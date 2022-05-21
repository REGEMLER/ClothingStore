import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState:{
        users:[{
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        }]
    },
    reducers: {
        setUser: (state, action) => {
            state.users.push(action.payload);
        },
    }
})

export const {setUser} = userSlice.actions; 
export default userSlice.reducer; 