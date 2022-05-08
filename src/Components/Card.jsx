import React from "react";
import cls from "../Styles/Delivery.modules.scss"

export const Card =({image,title,size,price}) =>{
    return(
        <div className="card">
            <div className="cardImg"><img src={image}/></div>
            <div className="popularContent">
                <h4 className="cardTitle">{title}</h4>
                <div className="popularText">
                    <p className="popularTitle">Размер:</p>
                    <p className="popularPrice">{size}</p>
                </div>
                <div className="popularText">
                    <p className="popularTitle">Цена:</p>
                    <p className="popularPrice">{price}</p>
                </div>
                <button>В корзину</button>
            </div>
        </div>

    )
}