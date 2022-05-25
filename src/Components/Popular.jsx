import React from "react";
import { Container, Row} from "react-bootstrap";
import cls from "../Styles/Styles.modules.scss";
import {PopularItem} from "../Components/PopularItem";
import bickl from "../IMG/bickl.png";
import tShort from "../IMG/t-short.png";
import mask from "../IMG/mask.png";
import boots from "../IMG/boots.png";
import equip from "../IMG/equip.png";
import legg from "../IMG/legg.png";
import majka from "../IMG/majka.png";
import shorts from "../IMG/shorts.png";

 export const Popular =() => {
   

    const examplesArr = [{id: new Date(), image: bickl, name: "Шорты черные", price: "500"},
                      {id: new Date(), image: tShort, name: "Футболка мужская", price: "700"},
                      {id: new Date(), image: mask, name: "Маска для лица", price: "100"},
                      {id: new Date(), image: boots, name: "Обувь", price: "400"},
                      {id: new Date(), image: equip, name: "Ремень кожанный", price: "1500"},
                      {id: new Date(), image: legg, name: "Леггинсы", price: "860"},
                      {id: new Date(), image: majka, name: "майка белая", price: "200"},
                      {id: new Date(), image: shorts, name: "Шорты", price: "300"}
        ];
    let arrSorted =  examplesArr.sort(()=> Math.random()-0.5);
    let arrDisplay = arrSorted.slice(0,3); 


    return(
        <section>
            <Container fluid="md">
                <h2>Популярные товары</h2>
                <Row>
                {arrDisplay.map(popular => {
                    return (
                     <PopularItem key={popular.id}
                      img={popular.image}
                      name={popular.name}
                      price={popular.price}
                     />
                            )
                })}
                </Row>
            </Container>
        </section>
    )
}