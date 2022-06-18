import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import cardReducer from "./card/reducer";
import commentsReducer from "./comments/reducer";
import userReducer from "./user/reducer";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        cards: cardReducer,
        comments:commentsReducer,
        user: userReducer,
    }
})