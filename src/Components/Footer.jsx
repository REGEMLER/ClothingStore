import React from "react";
import {Container, Row,Col} from  "react-bootstrap";
import {Link} from  "react-router-dom";
import logo from "../IMG/logo.png";
import styled from "styled-components";

const Styles = styled.div`
    .container{
        text-align: center;
    }
    a,p{
        text-decoration: none;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        color: #adb2b4;
        &:hover{
            color: black;
        }
    } 
`

const Footer = () => {
    return (
        <Styles>
        <Container>
            <Row>
                <Col><Link to="/">Главная</Link></Col>
                <Col><Link to="/delivery">Доставка</Link></Col>
                <Col><Link to="/payment">Оплата</Link></Col>
                <Col> <p>+1 123 44 55 33</p></Col>
            </Row>
            <Row>
                <Col><Link to="/catalog">Каталог</Link></Col>
                <Col><Link to="/">Главная</Link></Col>
                <Col><Link to="/reference">Вопросы</Link></Col>
                <Col><p>gergergrg@gmail.com</p></Col>
            </Row>
            <Row>
                <Col><Link to="/delivery">Доставка</Link></Col>
                <Col><Link to="/delivery">Доставка</Link></Col>
                <Col><Link to="/payment">Оплата</Link></Col>
                <Col><p>Yamada Todoso</p></Col>
            </Row>
            <Row>
                <Col><Link to="/servis">Услуги</Link></Col>
                <Col><Link to="/reference">Вопросы</Link></Col>
                <Col><Link to="/reference">Вопросы</Link></Col>
                <Col><img
                    src={logo}
                    width="70"
                    height="40"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
               /></Col>
            </Row>
        </Container>
        </Styles>
    )
}

export default Footer; 