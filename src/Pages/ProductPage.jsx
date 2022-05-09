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

    const products = [
        {id: "tSort1",image: tShort , title: "Футболка", size: "40-60", price: "150"},
        {id: "tSort2",image: tShort , title: "Футболка", size: "40-60",price: "200"},
        {id: "tSort3",image: tShort , title: "Футболка", size: "40-60", price: "250"},
        {id: "tSort4",image: tShort , title: "Футболка", size: "40-60", price: "350"},
        {id: "tSort5",image: tShort , title: "Футболка", size: "40-60", price: "450"},
        {id: "tSort6",image: tShort , title: "Футболка", size: "40-60", price: "500"},
        {id: "tSort7",image: tShort , title: "Футболка", size: "40-60", price: "550"},
        {id: "tSort8",image: tShort , title: "Футболка", size: "40-60", price: "650"},
        {id: "tSort9",image: tShort , title: "Футболка", size: "40-60", price: "1000"},
    ];

    
    return(
        <>
        <Styles>
        <div className="container">
            {products.map(product => {
                return (
                    <Card
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