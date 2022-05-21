import React,{useState} from "react";
import {Modal, Form, FormGroup, Button} from  "react-bootstrap";

export const Message = () => {
    const [show,setShow] = useState(false);
    const handleShow = () =>setShow(true); 
    const handleClose = () => setShow(false);

    return(
        <section className="message">
            <div className="message-container">
                <h2 className="message-title">Хотите поделиться мнением?</h2>
                <p className="message-text">Оставьте свой честны отзыв о сотрудничестве с нами, это поможет другим покупателям.</p>
                <button className="message-btn" onClick={handleShow}>Оставить отзыв</button>
            </div>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton><Modal.Title>Оставьте свой отзыв!</Modal.Title></Modal.Header>
            <Modal.Body>
                <Form>
                    <FormGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Пишите тут...</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                    </FormGroup>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Отмена</Button>
            <Button variant="primary" onClick={handleClose}>Отправить</Button>
            </Modal.Footer>
            </Modal>
        </section>
    )
}