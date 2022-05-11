import React,{useState} from "react";
import {Popular} from "../Components/Popular"; 
import {Button, Col} from  "react-bootstrap";
import cls from "../Styles/Cart.modules.scss";

const Cart = () => {

    //Не использовали, скорее всего массив должен быть создан на верхнем компоненте
    const [products, setProduct] = useState([]);
    const addClothes = (id,image, title, size, price) => {
        const product = {id, image, title, size, price};
        setProduct(...products,product)
    }
    return (
        <>
        <div className="cart">Здесь будут складываться товары добавленные в корзину</div>
        {products.map((prod)=>{
            return(
                <Col>
                </Col>
            )
        })}
        <Popular/>
        </>
    )
}

export default Cart;