import React from "react";
import {Popular} from "../Components/Popular"; 
import styled from "styled-components";
import {Card} from "../Components/Card"; 
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
    .container {
        width: 100%;
        margin: 0 auto;
        padding: 40px;
        display: grid;
        grid-template-columns: repeat(auto-fill, 300px);
        grid-auto-rows: repeat(auto-fill, 300px);
        gap: 40px;
        align-content: stretch;
        justify-content: space-between;
    } 
`

const ProductPage = () => {

    const tSorts = [
        {id: "tSort1", title: "Футболка", size: "40-60", price: "150", image: tShort},
        {id: "tSort2", title: "Футболка", size: "40-60", price: "200", image: tShort},
        {id: "tSort3", title: "Футболка", size: "40-60", price: "250", image: tShort},
        {id: "tSort4", title: "Футболка", size: "40-60", price: "350", image: tShort},
        {id: "tSort5", title: "Футболка", size: "40-60", price: "450", image: tShort},
        {id: "tSort6", title: "Футболка", size: "40-60", price: "500", image: tShort},
        {id: "tSort7", title: "Футболка", size: "40-60", price: "550", image: tShort},
        {id: "tSort8", title: "Футболка", size: "40-60", price: "650", image: tShort},
        {id: "tSort9", title: "Футболка", size: "40-60", price: "1000", image: tShort},
    ];
    const bickls = [
        {id: "bickl1", title: "Шорты", size: "40-60", price: "150", image: bickl},
        {id: "bickl2", title: "Шорты", size: "40-60", price: "250", image: bickl},
        {id: "bickl3", title: "Шорты", size: "40-60", price: "200", image: bickl},
        {id: "bickl4", title: "Шорты", size: "40-60", price: "350", image: bickl},
        {id: "bickl5", title: "Шорты", size: "40-60", price: "450", image: bickl},
        {id: "bickl6", title: "Шорты", size: "40-60", price: "500", image: bickl},
        {id: "bickl7", title: "Шорты", size: "40-60", price: "550", image: bickl},
        {id: "bickl8", title: "Шорты", size: "40-60", price: "650", image: bickl},
        {id: "bickl9", title: "Шорты", size: "40-60", price: "1000", image: bickl},
    ];
    const bootses = [
        {id: "boots1", title: "Обувь", size: "40-60", price: "150", image: boots},
        {id: "boots2", title: "Обувь", size: "40-60", price: "200", image: boots},
        {id: "boots3", title: "Обувь", size: "40-60", price: "250", image: boots},
        {id: "boots4", title: "Обувь", size: "40-60", price: "350", image: boots},
        {id: "boots5", title: "Обувь", size: "40-60", price: "450", image: boots},
        {id: "boots6", title: "Обувь", size: "40-60", price: "500", image: boots},
        {id: "boots7", title: "Обувь", size: "40-60", price: "550", image: boots},
        {id: "boots8", title: "Обувь", size: "40-60", price: "650", image: boots},
        {id: "boots9", title: "Обувь", size: "40-60", price: "1000", image: boots},
    ];
    const equipes = [
        {id: "equip1", title: "Ремень", size: "40-60", price: "150", image: equip},
        {id: "equip2", title: "Ремень", size: "40-60", price: "200", image: equip},
        {id: "equip3", title: "Ремень", size: "40-60", price: "250", image: equip},
        {id: "equip4", title: "Ремень", size: "40-60", price: "350", image: equip},
        {id: "equip5", title: "Ремень", size: "40-60", price: "450", image: equip},
        {id: "equip6", title: "Ремень", size: "40-60", price: "500", image: equip},
        {id: "equip7", title: "Ремень", size: "40-60", price: "550", image: equip},
        {id: "equip8", title: "Ремень", size: "40-60", price: "650", image: equip},
        {id: "equip9", title: "Ремень", size: "40-60", price: "1000", image: equip},
    ];
    const masks = [
        {id: "mask1", title: "Маска", size: "40-60", price: "150", image: mask},
        {id: "mask2", title: "Маска", size: "40-60", price: "200", image: mask},
        {id: "mask3", title: "Маска", size: "40-60", price: "250", image: mask},
        {id: "mask4", title: "Маскаа", size: "40-60",price: "350", image: mask},
        {id: "mask5", title: "Маска", size: "40-60", price: "450", image: mask},
        {id: "mask6", title: "Маска", size: "40-60", price: "500", image: mask},
        {id: "mask7", title: "Маска", size: "40-60", price: "550", image: mask},
        {id: "mask8", title: "Маска", size: "40-60", price: "650", image: mask},
        {id: "mask9", title: "Маска", size: "40-60", price: "1000", image: mask},
    ];
    const leggs = [
        {id: "legg1", title: "Леггинсы", size: "40-60", price: "150", image: legg},
        {id: "legg2", title: "Леггинсы", size: "40-60", price: "200", image: legg},
        {id: "legg3", title: "Леггинсы", size: "40-60", price: "250", image: legg},
        {id: "legg4", title: "Леггинсы", size: "40-60", price: "350", image: legg},
        {id: "legg5", title: "Леггинсы", size: "40-60", price: "450", image: legg},
        {id: "legg6", title: "Леггинсы", size: "40-60", price: "500", image: legg},
        {id: "legg7", title: "Леггинсы", size: "40-60", price: "550", image: legg},
        {id: "legg8", title: "Леггинсы", size: "40-60", price: "650", image: legg},
        {id: "legg9", title: "Леггинсы", size: "40-60", price: "1000", image: legg},
    ];
    const shortes = [
        {id: "shorts", title: "Шорты", size: "40-60", price: "150", image: shorts},
        {id: "shorts", title: "Шорты", size: "40-60", price: "200", image: shorts},
        {id: "shorts", title: "Шорты", size: "40-60", price: "250", image: shorts},
        {id: "shorts", title: "Шорты", size: "40-60", price: "350", image: shorts},
        {id: "shorts", title: "Шорты", size: "40-60", price: "450", image: shorts},
        {id: "shorts", title: "Шорты", size: "40-60", price: "500", image: shorts},
        {id: "shorts", title: "Шорты", size: "40-60", price: "550", image: shorts},
        {id: "shorts", title: "Шорты", size: "40-60", price: "650", image: shorts},
        {id: "shorts", title: "Шорты", size: "40-60", price: "1000", image: shorts},
    ];
    const majkas = [
        {id: "majka1", title: "Майка", size: "40-60", price: "150", image: majka},
        {id: "majka2", title: "Майка", size: "40-60", price: "200", image: majka},
        {id: "majka3", title: "Майка", size: "40-60", price: "250", image: majka},
        {id: "majka4", title: "Майка", size: "40-60", price: "350", image: majka},
        {id: "majka5", title: "Майка", size: "40-60", price: "450", image: majka},
        {id: "majka6", title: "Майка", size: "40-60", price: "500", image: majka},
        {id: "majka7", title: "Майка", size: "40-60", price: "550", image: majka},
        {id: "majka8", title: "Майка", size: "40-60", price: "650", image: majka},
        {id: "majka9", title: "Майка", size: "40-60", price: "1000", image: majka},
    ];
    const tolss = [
        {id: "tols1", title: "Кофта", size: "40-60", price: "150", image: tols},
        {id: "tols2", title: "Кофта", size: "40-60", price: "200", image: tols},
        {id: "tols3", title: "Кофта", size: "40-60", price: "250", image: tols},
        {id: "tols4", title: "Кофта", size: "40-60", price: "350", image: tols},
        {id: "tols5", title: "Кофта", size: "40-60", price: "450", image: tols},
        {id: "tols6", title: "Кофта", size: "40-60", price: "500", image: tols},
        {id: "tols7", title: "Кофта", size: "40-60", price: "550", image: tols},
        {id: "tols8", title: "Кофта", size: "40-60", price: "650", image: tols},
        {id: "tols9", title: "Кофта", size: "40-60", price: "1000", image: tols},
    ];

    
    return(
        <>
            <Styles>
                <div className="container">
                    {tSorts.map(product => {
                        return (
                        <Card
                        product={product}
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        size={product.size}
                        price={product.price}
                        />
                        )
                    })}
                </div>
                <Popular/>
            </Styles>
        </>
    )
}

export default ProductPage;