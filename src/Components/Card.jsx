import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItemInCart, deleteItemFromCart } from "../redux/cart/reducer";
import cls from "../Styles/Card.module.scss"

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
        <div key={id} className={cls.card}>
            <div className={cls.cardImg}><img src={image}/></div>
            <div className={cls.content}>
                <h4 className={cls.title}>{title}</h4>
                <div className={cls.text}>
                    <p className={cls.size}>Размер:</p>
                    <p className={cls.price}>{size}</p>
                </div>
                <div className={cls.text}>
                    <p className={cls.size}>Цена:</p>
                    <p className={cls.price}>{price} ₽</p>
                </div>
                <button className={cls.btn} onClick={addInCart}>{isItemInCart ? "Удалить" : "В Корзину"}</button>
            </div>
        </div>
    )
}