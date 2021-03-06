import React, { useState } from "react";
import cls from "../Styles/Questions.module.scss";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";
import { Modal, Form, Button } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase';

export const Questions = () => {

  const { email, id, isAuth } = useAuth();
  const navigate = useNavigate();

  const [question, setQuestion] = useState(``);
  const [formQuestion, setFormQuestion] = useState(false);
  const questionShow = () => setFormQuestion(true);
  const questionClose = () => setFormQuestion(false);
  const questionKeyPress = (e) => {
    if (e.key === "Enter") {
      makeQuestion(e)
    }
  }
  const questionChange = (e) => {
    setQuestion(e.currentTarget.value);
  }
  const questionClick = (e) => {
    makeQuestion(e)
  }

  const makeQuestion = (e) => {
    e.preventDefault();
    const docRef = addDoc(collection(db, "questions"), {
      question: question,
      email,
      uid: id
    });
    questionClose();
    setQuestion(``);
    setSucces(true);
  }

  const [succes, setSucces] = useState(false);
  const succesClose = () => setSucces(false);

  return (
    <section className={cls.questions}>
      <div className={cls.container}>
        <h2 className={cls.title}>Остались вопросы?</h2>
        <p className={cls.text}>Заполните форму и менеджер свяжется с вами в ближайшее время.</p>
        <div className={cls.btns}>
          <button className={cls.btn} onClick={isAuth ? questionShow : () => navigate("/login")}>Задать вопрос</button>
          <button className={cls.btn}><a href="tel:+375292384886">Позвонить</a></button>
        </div>
      </div>
      <Modal show={formQuestion} onHide={questionClose}>
        <Modal.Header closeButton><Modal.Title>Что Вас интересует?</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form onSubmit={makeQuestion}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Напишите свой вопрос здесь</Form.Label>
              <Form.Control onChange={questionChange} onKeyDown={questionKeyPress} value={question} as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={questionClose}>Закрыть</Button>
          <Button variant="primary" onClick={questionClick}>Отправить</Button>
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