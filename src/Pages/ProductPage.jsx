import React from "react";
import {Popular} from "../Components/Popular"; 
import { useSelector} from 'react-redux';
import styled from "styled-components";
import Card from "../Components/Card"; 

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
    const card =  useSelector(state => state.cards.currentCard);
    if(!card) return null;

    const raiment = [
        {id: card.id+11, title: card.titleInItem, size: card.size, price: "150", image: card.image},
        {id: card.id+12, title: card.titleInItem, size: card.size, price: "200", image: card.image},
        {id: card.id+13, title: card.titleInItem, size: card.size, price: "250", image: card.image},
        {id: card.id+14, title: card.titleInItem, size: card.size, price: "350", image: card.image},
        {id: card.id+15, title: card.titleInItem, size: card.size, price: "450", image: card.image},
        {id: card.id+16, title: card.titleInItem, size: card.size, price: "500", image: card.image},
        {id: card.id+17, title: card.titleInItem, size: card.size, price: "550", image: card.image},
        {id: card.id+18, title: card.titleInItem, size: card.size, price: "650", image: card.image},
        {id: card.id+19, title: card.titleInItem, size: card.size, price: "1000",image: card.image},
    ];

    return(
        <>
            <Styles>
                <div className="container">
                    {raiment.map(product => {
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