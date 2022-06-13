import React from "react";
import Subtitle from "../Components/Subtitle";
import {Questions} from "../Components/Questions"; 
import {Examples} from "../Components/Examples"; 
import CategoryCard from "../Components/CategoryCard"; 
import styled from "styled-components";
//Картинки для витрины
import tShort from "../IMG/t-short.png";
import bickl from "../IMG/bickl.png";
import boots from "../IMG/boots.png";
import equip from "../IMG/equip.png";
import mask from "../IMG/mask.png";
import legg from "../IMG/legg.png";
import singlet from "../IMG/majka.png";
import shorts from "../IMG/shorts.png";
import tols from "../IMG/tols.png";
//Картинки футболок 
import tShort1 from "../IMG/T-Shorts/бабочка.jpg";
import tShort5 from "../IMG/T-Shorts/зеленая.jpeg";
import tShort6 from "../IMG/T-Shorts/красная.png";
import tShort7 from "../IMG/T-Shorts/синяя.jpg";
import tShort8 from "../IMG/T-Shorts/фиолетовая.jpg";
import tShort9 from "../IMG/T-Shorts/черная.jpg";
//велосипедки
import bick2 from "../IMG/Biks/лег1.jpg";
import bick3 from "../IMG/Biks/лег2.jpg";
import bick4 from "../IMG/Biks/лег3.png";
import bick5 from "../IMG/Biks/лег5.jpg";
//Обувь 
import boot2 from "../IMG/Boots/кеды.jpg";
import boot3 from "../IMG/Boots/лео.jpg";
import boot4 from "../IMG/Boots/оранжевое.jpg";
import boot5 from "../IMG/Boots/сапоги.jpg";
import boot6 from "../IMG/Boots/туфли.jpg";
import boot7 from "../IMG/Boots/фиолетовое.jpg";
import boot8 from "../IMG/Boots/розовое.jpg";
//Ремни
import equip1 from "../IMG/Equips/ремень.jpg";
import equip2 from "../IMG/Equips/рем2.jpg";
import equip3 from "../IMG/Equips/рем3.jpg";
import equip4 from "../IMG/Equips/рем4.jpg";
import equip5 from "../IMG/Equips/рем5.jpg";
//Маски
import mask1 from "../IMG/Masks/зеленая.png";
import mask2 from "../IMG/Masks/красная.jpg";
import mask3 from "../IMG/Masks/многоразовая.jpg";
import mask4 from "../IMG/Masks/обычная.jpg";
import mask5 from "../IMG/Masks/розовая.jpg";
import mask6 from "../IMG/Masks/ундо.jpg";
//майки
import singlet1 from "../IMG/small/америка.jpg";
import singlet2 from "../IMG/small/Женская.jpg";
import singlet3 from "../IMG/small/полоска.jpg";
import singlet4 from "../IMG/small/dark.jpg";
import singlet5 from "../IMG/small/телевизор.jpg";
//шорты
import shorts1 from "../IMG/shorts/зеленые.jpg";
import shorts2 from "../IMG/shorts/красные.jpg";
import shorts3 from "../IMG/shorts/мужские.jpeg";
import shorts4 from "../IMG/shorts/оранж.jpg";
import shorts5 from "../IMG/shorts/розовое.jpg";
import shorts6 from "../IMG/shorts/черная.jpg";
//Рашгарды
import tols1 from "../IMG/tols/волк.jpg";
import tols2 from "../IMG/tols/голубая.jpg";
import tols3 from "../IMG/tols/китай.jpg";
import tols4 from "../IMG/tols/лев.jpg";
import tols5 from "../IMG/tols/узкая.jpg";
import tols6 from "../IMG/tols/черная.jpg";

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
        {id: "category1",
        image: tShort, 
        title: "Верх", 
        text: "Футболки, майки", 
        size: ["38", "40", "44", "46", "50"], 
        titleInItem: ["Футболка стильная","Футболка белая", "футболка новая", "футболка недорогая", "футболка зеленая", "футболка красная", "футболка синяя", "футболка фиолетовая", "футболка черная"], 
        images:[tShort1,tShort,tShort9,tShort8,tShort5,tShort6,tShort7,tShort8,tShort9], 
        price:["150", "400", "300", "500", "650", "700", "200", "800", "1000"]},
        {id: "category2",
        image: bickl, 
        title: "Низ", 
        text: "Велосипедки, леггинсы", 
        size: ["40", "45", "50", "55", "60"], 
        titleInItem: ["Бренд","Велисипедки","Леггинсы","Женские","Зеленые","Велисипедки","Леггинсы","Спортивные","Леггинсы"],
        images:[bickl,bick2,bick3,bick2,bick4,bickl,bick3,bick2,bickl],
        price:["100", "300", "400", "5000", "200", "500", "2000", "700", "1000"]},
        {id: "category3",
        image: boots, 
        title: "Обувь", 
        text: "Штангетки", 
        size: ["38", "40", "44", "45", "42"], 
        titleInItem: ["Кроссовки","Классика","Кеды","Леопард","Оранжевые","Сапоги","Туфли","Фиолетовые","Розовые"],
        images:[boots,boot6,boot2,boot3,boot4,boot5,boot6,boot7,boot8], 
        price:["1000", "500", "200", "5000", "300", "600", "2000", "700", "400"]},
        {id: "category4", 
        image: legg, 
        title: "Леггинсы", 
        text: "Для путешествий", 
        size: ["X", "XL", "M", "XXL", "S"], 
        titleInItem: ["Леггинсы","Женские","Новые","Черные","Спорт","Велисипедки","Леггинсы","Трико","Велисипедки"],
        images:[legg,bick5,bick4,bick2,bickl,legg,bick5,legg,bick3], 
        price:["100", "400", "800", "400", "600", "150", "1500", "1700", "1000"]},
        {id: "category5",
        image: equip, 
        title: "Экипировка", 
        text: "Ремни для гиревого спорта и тяжелоатлетические", 
        size: ["X", "XL", "M", "XXL", "S"], 
        titleInItem: ["Ремень кожанный","Ремень черный","Ремень","Ремень женский","Ремень кожанный","Ремень натуральный","Ремень","Ремень для спорта","Ремень"],
        images:[equip,equip1,equip2,equip3,equip4,equip5, equip1, equip, equip3],
        price:["100", "300", "800", "200", "300", "150", "100", "200", "100"]},
        {id: "category6",
        image: mask,
         title: "Маски",
         text: "Медицинские с готовым и индивидуальным дизайном",
         size: ["-", "-", "-", "-", "-"], titleInItem: ["Маска черная", "Маска красная", "Маска зеленая", "Многоразовая", "Маска обыкновенная", "Маска розовая", "Undo", "Маска", "Маска медицинская"],
         images:[mask,mask2,mask1,mask3,mask4,mask5,mask6,mask,mask4], 
         price:["10", "30", "80", "20", "30", "15", "100", "20", "40"]},
        {id: "category7",
        image: singlet, 
        title: "Майки", 
        text: "Удобство, комфорт, свобода", 
        size: ["35", "40", "45", "50", "55"], 
        titleInItem: ["Майка белая", "Америка", "Майка женская", "В полоску", "Майка темная", "Творческая", "Майка", "Новая", "Свободная"],
        images:[singlet,singlet1,singlet2,singlet3,singlet4,singlet5,singlet,singlet2,singlet4], 
        price:["100", "200", "800", "250", "1000", "150", "700", "200", "400"]},
        {id: "category8",
        image: shorts, 
        title: "Шорты",
         text: "Всех размеров", 
         size: ["XL", "M", "S", "XXL", "L"], 
         titleInItem: ["Шорты", "Шорты зеленые", "Шорты красные", "Шорты мужские", "Апельсин", "Шорты женские", "Темные", "Классика", "Оригинал"],
         images:[shorts,shorts1,shorts2,shorts3,shorts4,shorts5,shorts6,shorts,shorts1,shorts3], 
         price:["700", "200", "300", "2500", "100", "500", "600", "300", "500"]},
        {id: "category9",
        image: tols,
         title: "Рашгарды",
         text: "Стильно, модно, молодежно",
         size: ["X", "ML", "M", "S", "L"],
         titleInItem: ["Белая", "Сила зверя", "Новинка", "Азия", "Царь зверей", "Летняя", "Черная", "Лев", "Хит продаж"],
         images:[tols,tols1,tols2,tols3,tols4,tols5,tols6,tols4,tols3],
         price:["1400", "1200", "2000", "2500", "1000", "5500", "3000", "1500", "500"]}
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
                    images = {clothesItem.images}
                    price= {clothesItem.price}
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