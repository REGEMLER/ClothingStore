import React from "react";
import Subtitle from "../Components/Subtitle";
import {Examples} from "../Components/Examples";
import {Questions} from "../Components/Questions"; 
import {Popular} from "../Components/Popular"; 
import {Requiz} from "../Components/Requiz"; 
import {Col, Container, Row, Button} from  "react-bootstrap";


const Servis = () => {
    return(
        <>
            <Subtitle title='Услуги'/>
            <Container className="w-100 my-4 text-center deliveryContainer">
                <h2>Мы оказываем полный спектр услуг от проектирования до пошива одежды</h2>
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
            <Requiz/>
            <Questions/>
        </>

    )
}

export default Servis;