import React,{useState} from "react";
import Subtitle from "../Components/Subtitle";
import {Questions} from "../Components/Questions"; 
import {Col, Container, Row, Modal, Form, Button} from  "react-bootstrap";
import cls from "../Styles/Delivery.module.scss";
import post1 from "../IMG/PostBelpng.png";
import post2 from "../IMG/Delivery.png";



const Delivery = () => {
    const [show, setShow] = useState(false);
    const [succes, setSucces] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const succesClose = () => setSucces(false);

    const succesShow = () => {
        handleClose();
        setSucces(true);
    }
    return(
        <>
        <Subtitle title='Доставка'/>
        <Container className="p-4" style={{overflow: "hidden"}}>
            <Row onClick={handleShow}>
            <Col xs={5}><div className={cls.deliveryImg}><img src={post2}/></div></Col>
                <Col xs={7}>
                    <h3 className={cls.deliveryTitle}>Почта России</h3>
                    <ul className={cls.menu}>
                        <li className={cls.menuItem}>Сроки доставки: от 5 рабочих дней.</li>
                        <li className={cls.menuItem}>Пересылка до востребования.</li>
                        <li className={cls.menuItem}>Стоимость доставки: от 400 руб., в зависимости от удаленности и количества изделий.</li>
                        <li className={cls.menuItem}>Отслеживание отправлений</li>
                    </ul>
                </Col>
            </Row>
            <Row onClick={handleShow}>
            <Col xs={5}><div className={cls.deliveryImg}><img src={post1}/></div></Col>
                <Col xs={7}>
                    <h3 className={cls.deliveryTitle}>Белпошта</h3>
                    <ul className={cls.menu}>
                        <li className={cls.menuItem}>Сроки доставки: 1-5 рабочих дней.</li>
                        <li className={cls.menuItem}>Пересылка до востребования.</li>
                        <li className={cls.menuItem}>Стоимость доставки: от 35 беларусских руб. в зависимости от удаленности.</li>
                        <li className={cls.menuItem}>Отслеживание отправлений</li>
                    </ul>
                </Col>
            </Row>
            <Row onClick={handleShow}>
            <Col xs={5}><div className={cls.deliveryImg}><img src={post2}/></div></Col>
                <Col xs={7}>
                    <h3 className={cls.deliveryTitle}>СДЭК САМОВЫВОЗ</h3>
                    <ul className={cls.menu}>
                        <li className={cls.menuItem}>Сроки доставки: 1-5 рабочих дней.</li>
                        <li className={cls.menuItem}>Пересылка до востребования.</li>
                        <li className={cls.menuItem}>Стоимость доставки: от 350 руб. в зависимости от удаленности.</li>
                        <li className={cls.menuItem}>Отслеживание отправлений</li>
                    </ul>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
       <Modal.Header closeButton><Modal.Title>Доставка</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Введите Ваш адрес</Form.Label>
              <Form.Control as="textarea" rows={1} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Отмена</Button>
          <Button variant="primary" onClick={succesShow}>Отправить</Button>
        </Modal.Footer>
      </Modal>
      <Modal show={succes} onHide={succesClose}>
        <Modal.Header closeButton><Modal.Title>Спасибо!</Modal.Title></Modal.Header>
        <Modal.Body>Ваш заказ уже в пути!</Modal.Body>
        <Modal.Footer><Button variant="secondary" onClick={succesClose}>ОК</Button></Modal.Footer>
      </Modal>
        </Container>
        <Questions/>
        </>
    )
}

export default Delivery;