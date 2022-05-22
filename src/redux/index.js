import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import cardReducer from "./card/reducer";
import commentsReducer from "./comments/reducer";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        cards: cardReducer,
        comments:commentsReducer
    }
})