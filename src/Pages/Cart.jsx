import React,{useState} from "react";
import {Popular} from "../Components/Popular"; 
import { Button} from  "react-bootstrap";
import cls from "../Styles/Cart.modules.scss";

const Cart = () => {
    return (
        <>
        <div className="cart">Здесь будут складываться товары добавленные в корзину</div>
        <Popular/>
        </>
    )
}

export default Cart;