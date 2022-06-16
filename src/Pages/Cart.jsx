import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cart/reducer";
import Card from "../Components/Card";
import { Link, useNavigate } from "react-router-dom";
import { Questions } from '../Components/Questions';
import { Container, Col, Row, Modal, Button } from "react-bootstrap";
import cls from "../Styles/Cart.module.scss"

const Cart = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const items = useSelector((state) => state.cart.itemsInCart);
    const totalPrice = items.reduce((acc, elem) => acc += Number(elem.price), 0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const checkout = () => {
        dispatch(clearCart());
        handleShow();
    }
    const clear = () => {
        dispatch(clearCart());
    }
    const pay = () => {
        handleClose();
        navigate('/payment');
    }


    return (
        <>
            <Container>
                <Row className="my-4">
                    {items.length > 0 ? items.map(product => {
                        return (
                            <Col className="d-flex justify-content-center">
                                <Card
                                    product={product}
                                    key={product.id}
                                    image={product.image}
                                    title={product.title}
                                    size={product.size}
                                    price={product.price}
                                />
                            </Col>
                        )
                    }) : <p className={cls.text}>Корзина пуста! Купите уже что-нибудь! <Link activeClassName="active" to="/catalog">Каталог</Link> </p>
                    }
                </Row>
                <h2 className={cls.total}>Всего к оплате: {totalPrice} ₽</h2>
                {items.length > 0 ? <div className={cls.btns}>
                    <button onClick={checkout} className={cls.btn}>Оплатить</button>
                    <button onClick={clear} className={cls.btn}>Очистить корзину</button>
                </div> :
                    null}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton><Modal.Title>Спасибо!</Modal.Title></Modal.Header>
                    <Modal.Body>Ваш заказ оформлен!</Modal.Body>
                    <Modal.Footer><Button variant="secondary" onClick={pay}>ОК</Button></Modal.Footer>
                </Modal>
            </Container>
            <Questions />
        </>
    )
}

export default Cart;