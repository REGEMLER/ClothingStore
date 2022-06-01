import React from "react";
import Subtitle from "../Components/Subtitle";
import {Questions} from "../Components/Questions"; 
import {Col, Container, Row} from  "react-bootstrap";
import cls from "../Styles/Payment.module.scss";
import visa from "../IMG/Visa.webp";

const Payment = () => {
    return(
        <>
        <Subtitle title='Оплата заказа'/>
        <Container className="p-4 deliveryContainer" style={{overflow: "hidden"}}>
            <Row className="align-items-center">
            <Col xs={5}><div className={cls.paymentImg}><img src={visa}/></div></Col>
                <Col xs={7}>
                    <h3 className={cls.paymentTitle}>ПЕРЕВОД НА КАРТУ</h3>
                    <p className={cls.paymentText}>Оперативный и простой способ. Мы сообщаем номер карты, на который необходимо сделать перевод</p>
                </Col>
            </Row>
            <Row className="align-items-center">
            <Col xs={5}><div className={cls.paymentImg}><img src={visa}/></div></Col>
                <Col xs={7}>
                    <h3 className={cls.paymentTitle}>ОНЛАЙН-ПЛАТЕЖИ ЧЕРЕЗ САЙТ</h3>
                    <p className={cls.paymentText}>При оформлении заказа в корзине возможно выбрать онлайн-оплату и оплатить заказ.</p>
                </Col>
            </Row>
            <Row className="align-items-center">
            <Col xs={5}><div className={cls.paymentImg}><img src={visa}/></div></Col>
                <Col xs={7}>
                    <h3 className={cls.paymentTitle}>ОПЛАТА ПО СЧЕТУ</h3>
                    <p className={cls.paymentText}>Мы направим вам реквизиты и счет для оплаты по запросу, оплату можно произвести через любой банк.</p>
                </Col>
            </Row>
        </Container>
        <Questions/>
        </>
    )
}

export default Payment;