import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import cardReducer from "./card/reducer";
import userReducer from "./users/reducer";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        cards: cardReducer,
        users:userReducer
    }
})