import React from "react";
import Subtitle from "../Components/Subtitle";
import {Examples} from "../Components/Examples";
import {Questions} from "../Components/Questions"; 
import {Popular} from "../Components/Popular"; 
import {Requisites} from "../Components/Requisites"; 
import {Col, Container, Row, Button} from  "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
     h2{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
        @media screen and (max-width: 768px){
            font-size: 48px;
        }
    } 
`


const Servis = () => {
    return(
        <>
            <Subtitle title='Услуги'/>
            <Container className="w-100 my-4 text-center" style={{overflow: "hidden"}}>
               <Styles><h2>Мы оказываем полный спектр услуг от проектирования до пошива одежды</h2></Styles>
                <Row>
                    <Col className="my-2"><Button variant="outline-secondary" size="lg">Конструирование одежды</Button></Col>
                    <Col className="my-2"><Button variant="outline-secondary" size="lg">Изготовление лекал одежды</Button></Col>
                </Row>
                <Row>
                    <Col className="my-2"><Button variant="outline-secondary" size="lg">Пошив одежды</Button></Col>
                    <Col className="my-2"><Button variant="outline-secondary" size="lg">Разработка моделей одежды под заказ</Button></Col>
                </Row>
                <Row>
                    <Col className="my-2"><Button variant="outline-secondary" size="lg">Разработка лекал одежды</Button></Col>
                    <Col className="my-2"><Button variant="outline-secondary" size="lg">Разработка дизайна одежды</Button></Col>
                </Row>
                <Row>
                    <Col className="my-2"><Button variant="outline-secondary" size="lg">Нанесение принтов на одежду</Button></Col>
                    <Col className="my-2"><Button variant="outline-secondary" size="lg">Разработка эскизов</Button></Col>
                </Row>
            </Container>
            <Examples/>
            <Popular/>
            <Requisites/>
            <Questions/>
        </>

    )
}

export default Servis;