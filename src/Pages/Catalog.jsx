import React from "react";
import {Subtitle} from "../Components/Subtitle";
import {Popular} from "../Components/Popular"; 
import {Questions} from "../Components/Questions"; 
import {Examples} from "../Components/Examples"; 
import {CategoryCard} from "../Components/CategoryCard"; 
import styled from "styled-components";


import tShort from "../IMG/t-short.png";
import bickl from "../IMG/bickl.png";
import boots from "../IMG/boots.png";
import equip from "../IMG/equip.png";
import mask from "../IMG/mask.png";
import legg from "../IMG/legg.png";
import majka from "../IMG/majka.png";
import shorts from "../IMG/shorts.png";
import tols from "../IMG/tols.png";


const Styles = styled.div`
    .catalog {
        width: 100%;
        padding: 30px;
        display: grid;
        grid-template-columns: repeat(auto-fill, 400px);
        grid-auto-rows: repeat(auto-fill, 400px);
        grid-gap: 40px;
        align-content: stretch;
        justify-content: space-around;
    } 
`

const Catalog = () => {

    const categoryCards = [
        {id: "category1",image: tShort , title: "Верх", text: "Футболки, майки", lin:"/product1"},
        {id: "category2",image: bickl , title: "Низ", text: "Велосипедки, леггинсы",lin:"/product1"},
        {id: "category3",image: boots , title: "Обувь", text: "Штангетки",lin: "/product1"},
        {id: "category4",image: legg , title: "Леггинсы", text: "Для путешествий",lin: "/product1"},
        {id: "category5",image: equip , title: "Экипировка", text: "Ремни для гиревого спорта и тяжелоатлетические",lin: "/product1"},
        {id: "category6",image: mask , title: "Маски", text: "Медицинские с готовым и индивидуальным дизайном",link: "/product1"},
        {id: "category7",image: majka , title: "Майки", text: "Удобство, комфорт, свобода",lin: "/product1"},
        {id: "category8",image: shorts , title: "Шорты", text: "Всех размеров", lin: "/product1"},
        {id: "category9",image: tols , title: "Рашгарды", text: "Стильно, модно, молодежно",lin: "/product1"},
    ];

    return(
        <>
        <Subtitle title='Выберите категорию'/>
        <Styles>
        <div className="catalog">
              {categoryCards.map ((clothesItem) => {
             return <CategoryCard
             key={clothesItem.id}
             clothesItem={clothesItem}
             image={clothesItem.image}
             title={clothesItem.title}
             text={clothesItem.text}
             lin={clothesItem.lin}
             />
            })}
        </div>
        </Styles>
        <Popular/>
        <Examples/>
        <Questions/>
        </>

    )
}

export default Catalog;