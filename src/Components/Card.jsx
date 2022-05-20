import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItemInCart, deleteItemFromCart } from "../redux/cart/reducer";
import cls from "../Styles/Styles.modules.scss"

export const Card =({product,id,image,title,size,price}) =>{
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.itemsInCart);
    const isItemInCart = items.some((item) => item.id === product.id);


    const addInCart = (e) => {
        e.stopPropagation();
        if (isItemInCart) {
            dispatch(deleteItemFromCart(product.id));
         } else {
             dispatch(setItemInCart(product));
        }
    }

    return(
        <div key={id} className="kard">
            <div className="cardImg"><img src={image}/></div>
            <div className="cardContent">
                <h4 className="cardTitle">{title}</h4>
                <div className="cardText">
                    <p className="cardTitle">Размер:</p>
                    <p className="cardPrice">{size}</p>
                </div>
                <div className="cardText">
                    <p className="cardTitle">Цена:</p>
                    <p className="cardPrice">{price} ₽</p>
                </div>
                <button onClick={addInCart}>{isItemInCart ? "Удалить" : "В Корзину"}</button>
            </div>
        </div>

    )
}