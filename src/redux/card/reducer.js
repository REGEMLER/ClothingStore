import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "cards",
    initialState: {
        currentCard: null
    },
    reducers: {
        setCurrentCard: (state, action) => {
            state.currentCard = action.payload;
        },
    }
})

export const { setCurrentCard } = cardSlice.actions;
export default cardSlice.reducer; 