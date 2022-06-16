import React, { useState } from "react";
import cls from "../Styles/Questions.module.scss";
import { Modal, Form, Button } from "react-bootstrap";

export const Questions = () => {
  const [show, setShow] = useState(false);
  const [call, setCall] = useState(false);
  const [succes, setSucces] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const callClose = () => setCall(false);
  const callShow = () => setCall(true);
  const succesClose = () => setSucces(false);
  const succeesShow1 = () => {
    handleClose();
    setSucces(true);
  }
  const succeesShow2 = () => {
    callClose();
    setSucces(true);
  }

  return (
    <section className={cls.questions}>
      <div className={cls.container}>
        <h2 className={cls.title}>Остались вопросы?</h2>
        <p className={cls.text}>Заполните форму и менеджер свяжется с вами в ближайшее время.</p>
        <div className={cls.btns}>
          <button className={cls.btn} onClick={handleShow}>Задать вопрос</button>
          <button className={cls.btn} onClick={callShow}>Позвонить</button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><Modal.Title>Что Вас интересует?</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Напишите свой вопрос здесь</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Закрыть</Button>
          <Button variant="primary" onClick={succeesShow1}>Отправить</Button>
        </Modal.Footer>
      </Modal>
      <Modal show={call} onHide={callClose}>
        <Modal.Header closeButton><Modal.Title>Позвонить</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="fromBasikTel">
              <Form.Label>Напишите Ваш номер и наш менеджер свяжется с Вами</Form.Label>
              <Form.Control type="Tel" placeholder="Введите Ваш номер телефона"></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={callClose}>Отмена</Button>
          <Button variant="primary" onClick={succeesShow2}>Отправить</Button>
        </Modal.Footer>
      </Modal>
      <Modal show={succes} onHide={succesClose}>
        <Modal.Header closeButton><Modal.Title>Поздравляем!</Modal.Title></Modal.Header>
        <Modal.Body>Ваш запрос отправлен! Наш менеджер скоро ответит Вам!</Modal.Body>
        <Modal.Footer><Button variant="secondary" onClick={succesClose}>ОК</Button></Modal.Footer>
      </Modal>
    </section>
  )
}