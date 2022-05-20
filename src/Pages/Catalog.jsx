import React from "react";
import {Subtitle} from "../Components/Subtitle";
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
        @media screen and (max-width: 768px){
            padding: 10px;
            grid-gap: 20px;
            justify-content: center;
            align-content: center;
        }
    } 
`

const Catalog = () => {

     const categories = [
        {id: "category1",image: tShort , title: "Верх", text: "Футболки, майки" , size: "40-50", titleInItem: "Футболка белая"},
        {id: "category2",image: bickl , title: "Низ", text: "Велосипедки, леггинсы" , size: "60-70", titleInItem: "Трико"},
        {id: "category3",image: boots , title: "Обувь", text: "Штангетки" , size: "38-45", titleInItem: "Кроссовки"},
        {id: "category4",image: legg , title: "Леггинсы", text: "Для путешествий" , size: "XL", titleInItem: "Леггинсы"},
        {id: "category5",image: equip , title: "Экипировка", text: "Ремни для гиревого спорта и тяжелоатлетические" , size: "XXL", titleInItem: "Ремень"},
        {id: "category6",image: mask , title: "Маски", text: "Медицинские с готовым и индивидуальным дизайном" , size: "-", titleInItem: "Маска"},
        {id: "category7",image: majka , title: "Майки", text: "Удобство, комфорт, свобода" , size: "40-60", titleInItem: ""},
        {id: "category8",image: shorts , title: "Шорты", text: "Всех размеров" , size: "38-54", titleInItem: "Шорты"},
        {id: "category9",image: tols , title: "Рашгарды", text: "Стильно, модно, молодежно" , size: "35-65", titleInItem: "Толстовка"},
     ]

    return(
        <>
            <Subtitle title='Выберите категорию'/>
            <Styles>
            <div className="catalog">
                {categories.map ((clothesItem) => {
                    return <CategoryCard
                     key={clothesItem.id}
                    clothesItem={clothesItem}
                    image={clothesItem.image}
                    title={clothesItem.title}
                    text={clothesItem.text}
                    size={clothesItem.size}
                    titleInItem={clothesItem.titleInItem}
                />
            })}
            </div>
            </Styles>
            <Examples/>
            <Questions/>
        </>
    )
}

export default Catalog;