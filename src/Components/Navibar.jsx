import React, {useState} from "react";
import {Navbar, Nav, Button, Container, Modal, Form} from  "react-bootstrap";
import {Link, NavLink} from  "react-router-dom";
import Login from "../Components/Login"; 
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
    .active{
        color:white; 
    }
    } 
`

const Navibar = () => {

    
    const[show, setShow] = useState(false);
    const handleShow = () =>  setShow(true);
    const handleClose = () => setShow(false); 


    const [isLogged, setIsLogged] = useState(false); 

     const logIn = () => {
        handleClose();
        setIsLogged(true);
     } 
     const logOut = () => setIsLogged(false);


    return(
            <Styles>
                <Navbar expand="md" collapseOnSelect bg="dark" variant="dark">
                    <Container className="sm-text-center justify-content-sm-center">
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
                                  <Nav.Link className="text-md-start text-center"><NavLink activeClassName="active" to="/">Главная</NavLink></Nav.Link>
                                  <Nav.Link className="text-md-start text-center"><NavLink activeClassName="active" to="/catalog">Каталог</NavLink></Nav.Link>
                                  <Nav.Link className="text-md-start text-center"><NavLink activeClassName="active" to="/delivery">Доставка</NavLink></Nav.Link>
                                  <Nav.Link className="text-md-start text-center"><NavLink activeClassName="active" to="/payment">Оплата</NavLink></Nav.Link>
                                  <Nav.Link className="text-md-start text-center"><NavLink activeClassName="active" to="/servis">Услуги</NavLink></Nav.Link>
                                  <Nav.Link className="text-md-start text-center"><NavLink activeClassName="active" to="/reference">Вопросы</NavLink></Nav.Link>
                                  <Nav.Link className="text-md-start text-center"><NavLink activeClassName="active" to="/comments">Отзывы</NavLink></Nav.Link>
                             </Nav>
                             <Nav className="my-2">
                                 {isLogged ?  <Button variant="light" className="me-3 my-2 my-md-0"><Link style={{"color": "black"}} to="/cart"><img src={cart}/> Корзина</Link></Button> : <Button onClick={handleShow} variant="outline-light" className="me-3 my-2 my-md-0"><img src={cart}/>Корзина</Button>}
                                 {isLogged ?  <Button variant="light" className="me-3 my-2 my-md-0"><Link style={{"color": "black"}} to="/constructor">Создай свой дизайн</Link></Button> : <Button onClick={handleShow} variant="outline-light" className="me-3 my-2 my-md-0">Создай свой дизайн</Button>}
                                 {isLogged ?  <Button variant= "light" className="me-2 my-2 my-md-0" onClick={logOut}>Выйти</Button>:<Button variant= "outline-light" className="me-2 my-2 my-md-0" onClick={handleShow}>Войти</Button>}
                             </Nav>
                        </Navbar.Collapse>
                      </Container>
                </Navbar>
                {show ? <Login handleClose={logIn}/> : null }
                {/* <Modal show={show} onHide={handleClose}>
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
        </Modal> */}
            </Styles>
    )
}

export default Navibar;