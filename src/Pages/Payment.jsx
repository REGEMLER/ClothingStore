import React, { useState } from "react";
import Subtitle from "../Components/Subtitle";
import { Questions } from "../Components/Questions";
import { Col, Container, Row, Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import cls from "../Styles/Payment.module.scss";
import visa from "../IMG/Visa.webp";

const Payment = () => {

  const navigate = useNavigate();
  const [succes, setSucces] = useState(false);

  const succesClose = () => {
    setSucces(false);
    navigate('/delivery');
  }
  const succesShow = () => setSucces(true);

  return (
    <>
      <Subtitle title='Оплата заказа' />
      <Container className="p-4" style={{ overflow: "hidden" }}>
        <Row onClick={succesShow} className="align-items-center">
          <Col xs={5}><div className={cls.paymentImg}><img src={visa} /></div></Col>
          <Col xs={7}>
            <h3 className={cls.paymentTitle}>ПЕРЕВОД НА КАРТУ</h3>
            <p className={cls.paymentText}>Оперативный и простой способ. Мы сообщаем номер карты, на который необходимо сделать перевод</p>
          </Col>
        </Row>
        <Row onClick={succesShow} className="align-items-center">
          <Col xs={5}><div className={cls.paymentImg}><img src={visa} /></div></Col>
          <Col xs={7}>
            <h3 className={cls.paymentTitle}>ОНЛАЙН-ПЛАТЕЖИ ЧЕРЕЗ САЙТ</h3>
            <p className={cls.paymentText}>При оформлении заказа в корзине возможно выбрать онлайн-оплату и оплатить заказ.</p>
          </Col>
        </Row>
        <Row onClick={succesShow} className="align-items-center">
          <Col xs={5}><div className={cls.paymentImg}><img src={visa} /></div></Col>
          <Col xs={7}>
            <h3 className={cls.paymentTitle}>ОПЛАТА ПО СЧЕТУ</h3>
            <p className={cls.paymentText}>Мы направим вам реквизиты и счет для оплаты по запросу, оплату можно произвести через любой банк.</p>
          </Col>
        </Row>
        <Modal show={succes} onHide={succesClose}>
          <Modal.Header closeButton><Modal.Title>Спасибо!</Modal.Title></Modal.Header>
          <Modal.Body>Укажите Ваше местоположение и мы доставим заказ</Modal.Body>
          <Modal.Footer><Button variant="secondary" onClick={succesClose}>ОК</Button></Modal.Footer>
        </Modal>
      </Container>
      <Questions />
    </>
  )
}

export default Payment;