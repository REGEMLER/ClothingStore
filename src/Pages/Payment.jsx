import React from "react";
import Subtitle from "../Components/Subtitle";
import {Questions} from "../Components/Questions"; 
import {Col, Container, Row} from  "react-bootstrap";
import cls from "../Styles/Styles.modules.scss";
import visa from "../IMG/Visa.webp";

const Payment = () => {
    return(
        <>
        <Subtitle title='Оплата заказа'/>
        <Container className="p-4 deliveryContainer">
            <Row className="align-items-center">
            <Col xs={5}><div className="deliveryImg"><img src={visa}/></div></Col>
                <Col xs={7}>
                    <h3 className="deliveryTitle">ПЕРЕВОД НА КАРТУ</h3>
                    <p>Оперативный и простой способ. Мы сообщаем номер карты, на который необходимо сделать перевод</p>
                </Col>
            </Row>
            <Row className="align-items-center">
            <Col xs={5}><div className="deliveryImg"><img src={visa}/></div></Col>
                <Col xs={7}>
                    <h3 className="deliveryTitle">ОНЛАЙН-ПЛАТЕЖИ ЧЕРЕЗ САЙТ</h3>
                    <p>При оформлении заказа в корзине возможно выбрать онлайн-оплату и оплатить заказ.</p>
                </Col>
            </Row>
            <Row className="align-items-center">
            <Col xs={5}><div className="deliveryImg"><img src={visa}/></div></Col>
                <Col xs={7}>
                    <h3 className="deliveryTitle">ОПЛАТА ПО СЧЕТУ</h3>
                    <p>Мы направим вам реквизиты и счет для оплаты по запросу, оплату можно произвести через любой банк.</p>
                </Col>
            </Row>
        </Container>
        <Questions/>
        </>
    )
}

export default Payment;