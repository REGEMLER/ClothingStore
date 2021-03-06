import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { clearCart } from "../redux/cart/reducer";
import Card from "../Components/Card";
import { Link, useNavigate } from "react-router-dom";
import { Questions } from '../Components/Questions';
import { Container, Col, Row, Modal, Button } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase';
import cls from "../Styles/Cart.module.scss"

const Cart = () => {
    const { email, id } = useAuth();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const items = useSelector((state) => state.cart.itemsInCart);
    const totalPrice = items.reduce((acc, elem) => acc += Number(elem.price), 0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const checkout = () => {
        const docRef = addDoc(collection(db, "orders"), {
            orders: items,
            email,
            uid: id
        });
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
                    }) : <p className={cls.text}>?????????????? ??????????! ???????????? ?????? ??????-????????????! <Link activeClassName="active" to="/catalog">??????????????</Link> </p>
                    }
                </Row>
                <h2 className={cls.total}>?????????? ?? ????????????: {totalPrice} ???</h2>
                {items.length > 0 ? <div className={cls.btns}>
                    <button onClick={checkout} className={cls.btn}>????????????????</button>
                    <button onClick={clear} className={cls.btn}>???????????????? ??????????????</button>
                </div> :
                    null}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton><Modal.Title>??????????????!</Modal.Title></Modal.Header>
                    <Modal.Body>?????? ?????????? ????????????????!</Modal.Body>
                    <Modal.Footer><Button variant="secondary" onClick={pay}>????</Button></Modal.Footer>
                </Modal>
            </Container>
            <Questions />
        </>
    )
}

export default Cart;