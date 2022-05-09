import React, {useState} from "react";
import {Navbar, Nav, Button, Container, Modal, Form} from  "react-bootstrap";
import {Link} from  "react-router-dom";
import styled from "styled-components";
import logo from "../IMG/logo.png";
import cart from "../IMG/cart.png"

const Styles = styled.div`
    a, .navbar-brand, .navbar-nav, .nav-link {
        text-decoration: none;
        color: #adb2b4;
        &:hover{
            color: white;
        }
    } 
`

const Navibar = () => {


    const[show, setShow] = useState(false);
    const [isLogged, setIsLogged] = useState(false); 

    const handleShow = () => {
        setShow(true);
    }
     const handleClose = () => setShow(false); 
     const logIn = () => {
        handleClose();
        setIsLogged(true);
     } 
     const logOut = () => setIsLogged(false);


    return(
            <Styles>
                <Navbar expand="md" collapseOnSelect bg="dark" variant="dark">
                    <Container className="sm-text-center">
                    <Navbar.Brand href="/">
                        <img
                             src={logo}
                             width="70"
                             height="40"
                             className="d-inline-block align-top"
                             alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                             <Nav className="me-auto my-2 my-lg-0">
                                  <Nav.Link><Link to="/">Главная</Link></Nav.Link>
                                  <Nav.Link><Link to="/catalog">Каталог</Link></Nav.Link>
                                  <Nav.Link><Link to="/delivery">Доставка</Link></Nav.Link>
                                  <Nav.Link><Link to="/payment">Оплата</Link></Nav.Link>
                                  <Nav.Link><Link to="/servis">Услуги</Link></Nav.Link>
                                  <Nav.Link><Link to="/reference">Вопросы</Link></Nav.Link>
                             </Nav>
                             <Nav className="my-2">
                                 {isLogged ?  <Button variant= "dark" className="me-2" onClick={isLogged? logOut :handleShow}>{isLogged ? "Выйти" : "Войти"}</Button> :  <Button variant= "light" className="me-2" onClick={isLogged? logOut :handleShow}>{isLogged ? "Выйти" : "Войти"}</Button>}
                                    <Button variant="light" className="me-2"><Link style={{"color": "black"}} to="/cart"><img src={cart}/> Корзина</Link></Button>
                             </Nav>
                        </Navbar.Collapse>
                      </Container>
                </Navbar>
                <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Log IN</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="my-2" controlId="fromBasikEmail">
                        <Form.Label>Email Adress</Form.Label>
                        <Form.Control type="email" placeholder="Введите Ваш email"></Form.Control>
                    </Form.Group>
                    <Form.Group className="my-2" controlId="fromBasikLogin">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control type="login" placeholder="Введите Ваш логин"></Form.Control>
                    </Form.Group>
                    <Form.Group className="my-2" controlId="fromBasikPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль"></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="fromBasikCheckbox">
                        <Form.Check type="checkbox" label="Запомнить меня"></Form.Check>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Отмена
          </Button>
          <Button variant="primary" onClick={logIn}>
            Войти
          </Button>
        </Modal.Footer>
        </Modal>
            </Styles>
    )
}

export default Navibar;