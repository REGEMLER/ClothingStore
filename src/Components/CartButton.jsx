import React from "react";
import cls from "../Styles/Cart.modules.scss";
import cart from "../IMG/cart.png"

 export const CartButton = () => {
    return(
            <div className="cart">
                <div className="cart_img"><img src={cart}/></div>
                <h3>Корзина</h3>
            </div>
    ) 
}
