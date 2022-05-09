import React from "react";
import cls from "../Styles/Delivery.modules.scss"

export const Card =({id,image,title,size,price}) =>{

   
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
                <button>В корзину</button>
            </div>
        </div>

    )
}