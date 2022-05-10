import React from "react";
import {Col} from "react-bootstrap";
import cls from "../Styles/Delivery.modules.scss";

export const PopularItem = ({id,img,name,price}) => {
    return(
        <Col key={id}>
            <div className="popularImg"><img src={img}></img></div>
                <div className="popularContent">
                    <div className="popularText">
                        <p className="popularTitle">{name}</p>
                        <p className="popularPrice">{price} ₽</p>
                    </div>
                    <button>В корзину</button>
                </div>
        </Col>
    )
}