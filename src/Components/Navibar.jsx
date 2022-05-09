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

    const handleShow = () => {
        setShow(true);
    }

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
                                    <Button variant="light" className="me-2" onClick={handleShow}>Войти</Button>
                                    <Button variant="light" className="me-2"><Link style={{"color": "black"}} to="/cart"><img src={cart}/> Корзина</Link></Button>
                             </Nav>
                        </Navbar.Collapse>
                      </Container>
                </Navbar>
            </Styles>
    )
}

export default Navibar;