import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import cardReducer from "./card/reducer";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        cards: cardReducer
    }
})