import React from "react";
import { Popular } from "../Components/Popular";
import { useSelector } from 'react-redux';
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
    const card = useSelector(state => state.cards.currentCard);
    if (!card) return null;

    const raiment = [
        { id: card.id + 11, title: card.titleInItem[0], size: card.size[0], price: card.price[0], image: card.images[0] },
        { id: card.id + 12, title: card.titleInItem[1], size: card.size[1], price: card.price[1], image: card.images[1] },
        { id: card.id + 13, title: card.titleInItem[2], size: card.size[2], price: card.price[2], image: card.images[2] },
        { id: card.id + 14, title: card.titleInItem[3], size: card.size[3], price: card.price[3], image: card.images[3] },
        { id: card.id + 15, title: card.titleInItem[4], size: card.size[4], price: card.price[4], image: card.images[4] },
        { id: card.id + 16, title: card.titleInItem[5], size: card.size[2], price: card.price[5], image: card.images[5] },
        { id: card.id + 17, title: card.titleInItem[6], size: card.size[1], price: card.price[6], image: card.images[6] },
        { id: card.id + 18, title: card.titleInItem[7], size: card.size[3], price: card.price[7], image: card.images[7] },
        { id: card.id + 19, title: card.titleInItem[8], size: card.size[0], price: card.price[8], image: card.images[8] },
    ];

    return (
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
                <Popular />
            </Styles>
        </>
    )
}

export default ProductPage;