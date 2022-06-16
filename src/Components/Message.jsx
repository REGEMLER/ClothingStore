import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from 'react-router-dom';
import { Modal, Form, FormGroup, Button } from "react-bootstrap";
import cls from "../Styles/Message.module.scss";

const Message = ({ addComment }) => {
    const { isAuth } = useAuth();
    const navigate = useNavigate();
    const [userInput, setUserInput] = useState(``);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        addComment(userInput);
        setUserInput(``);
        setShow(false);
    }
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }
    const handleClick = (e) => {
        handleSubmit(e)
    }

    return (
        <section className={cls.message}>
            <div className={cls.messageContainer}>
                <h2 className={cls.messageTitle}>Хотите поделиться мнением?</h2>
                <p className={cls.messageText}>Оставьте свой честный отзыв о сотрудничестве с нами, это поможет другим покупателям.</p>
                {isAuth ? <button className={cls.messageBtn} onClick={handleShow}>Оставить отзыв</button> : <button className={cls.messageBtn} onClick={() => navigate("/login")}>Оставить отзыв</button>}
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton><Modal.Title>Оставьте свой отзыв!</Modal.Title></Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Пишите тут...</Form.Label>
                            <Form.Control onChange={handleChange} onKeyDown={handleKeyPress} value={userInput} as="textarea" rows={3} />
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Отмена</Button>
                    <Button variant="primary" onClick={handleClick}>Отправить</Button>
                </Modal.Footer>
            </Modal>
        </section>
    )
}
export default React.memo(Message); 