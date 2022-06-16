import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsInCart: []
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload);
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.itemsInCart.length = 0;
        }
    }
})

export const { setItemInCart, deleteItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer; 