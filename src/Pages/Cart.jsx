import React from "react";
import { useSelector } from "react-redux";
import Card from "../Components/Card"; 
import {Link} from  "react-router-dom";
import {Questions} from '../Components/Questions';
import {Container,Col, Row} from  "react-bootstrap";
import styled from "styled-components";
const Styles = styled.div`
    h2{
        width: 100%;
        margin: 0 auto;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
        text-align: center;
        @media screen and (max-width: 768px){
            font-size: 48px;
        }
    }
    p{
        width: 100%;
        margin: 0 auto;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        margin-bottom: 10px;
        text-align: center;
        @media screen and (max-width: 768px){
            font-size: 20px;
        }
    }
    a{
        text-decoration: none;
        color: #adb2b4;
        &:hover{
            color: black;
        }
    } 
`


const Cart = () => {
    const items = useSelector((state) => state.cart.itemsInCart);
    const totalPrice = items.reduce((acc, elem) => acc+=Number(elem.price),0)

    return (
        <>
        <Styles>
        <Container> 
            <Row className="my-4">
            {items.length > 0 ? items.map(product =>{
                return (
                    <Col className="d-flex justify-content-center">
                        <Card
                    product={product}
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    size={product.size}
                    price={product.price}
                         />
                    </Col>
                )
            }): <p>Корзина пуста! Купите уже что-нибудь! <Link activeClassName="active" to="/catalog">Каталог</Link> </p>                              
            }
            </Row>
            <h2>Всего к оплате: {totalPrice} ₽</h2>
        </Container>
        </Styles>
        <Questions/>
        </>
    )
}

export default Cart;