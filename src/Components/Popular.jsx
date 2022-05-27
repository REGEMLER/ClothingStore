import React from "react";
import { Container, Row} from "react-bootstrap";
import cls from "../Styles/Styles.modules.scss";
import PopularItem from "../Components/PopularItem";
import bickl from "../IMG/bickl.png";
import tShort from "../IMG/t-short.png";
import mask from "../IMG/mask.png";
import boots from "../IMG/boots.png";
import equip from "../IMG/equip.png";
import legg from "../IMG/legg.png";
import majka from "../IMG/majka.png";
import shorts from "../IMG/shorts.png";

 export const Popular =() => {
   

    const examplesArr = [{id: "ex1", image: bickl, name: "Шорты черные", price: "500"},
                      {id: "ex2", image: tShort, name: "Футболка мужская", price: "700"},
                      {id: "ex3", image: mask, name: "Маска для лица", price: "100"},
                      {id: "ex4", image: boots, name: "Обувь", price: "400"},
                      {id: "ex5", image: equip, name: "Ремень кожанный", price: "1500"},
                      {id: "ex6", image: legg, name: "Леггинсы", price: "860"},
                      {id: "ex7", image: majka, name: "майка белая", price: "200"},
                      {id: "ex8", image: shorts, name: "Шорты", price: "300"}
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