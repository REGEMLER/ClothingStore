import React  from "react";
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {deleteUser} from "../redux/user/reducer";
import {Navbar, Nav, Button, Container} from  "react-bootstrap";
import {Link, NavLink} from  "react-router-dom";
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

    const {isAuth} = useAuth(); 
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const logOut = () => {
        dispatch(deleteUser());
        navigate('/');
    }

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
                                  {isAuth ?  <Nav.Link className="text-md-start text-center"><NavLink activeClassName="active" to="/catalog">Каталог</NavLink></Nav.Link> :  <Nav.Link className="text-md-start text-center"><NavLink activeClassName="active" to="/login">Каталог</NavLink></Nav.Link>}
                                  <Nav.Link className="text-md-start text-center"><NavLink activeClassName="active" to="/delivery">Доставка</NavLink></Nav.Link>
                                  <Nav.Link className="text-md-start text-center"><NavLink activeClassName="active" to="/payment">Оплата</NavLink></Nav.Link>
                                  <Nav.Link className="text-md-start text-center"><NavLink activeClassName="active" to="/servis">Услуги</NavLink></Nav.Link>
                                  <Nav.Link className="text-md-start text-center"><NavLink activeClassName="active" to="/reference">Вопросы</NavLink></Nav.Link>
                                  <Nav.Link className="text-md-start text-center"><NavLink activeClassName="active" to="/comments">Отзывы</NavLink></Nav.Link>
                             </Nav>
                             <Nav className="my-2">
                                 {isAuth ?  <Button variant="light" className="me-3 my-2 my-md-0"><Link style={{"color": "black"}} to="/cart"><img src={cart}/> Корзина</Link></Button> : <Button onClick={()=> navigate('/login')} variant="outline-light" className="me-3 my-2 my-md-0"><img src={cart}/>Корзина</Button>}
                                 {isAuth ?  <Button variant="light" className="me-3 my-2 my-md-0"><Link style={{"color": "black"}} to="/constructor">Создай свой дизайн</Link></Button> : <Button onClick={()=> navigate('/login')} variant="outline-light" className="me-3 my-2 my-md-0">Создай свой дизайн</Button>}
                                 {isAuth ?  <Button variant="light" className="me-2 my-2 my-md-0" onClick={logOut}>Выйти</Button>:<Button variant= "outline-light" className="me-2 my-2 my-md-0" onClick={()=> navigate('/login')}>Войти</Button>}
                             </Nav>
                        </Navbar.Collapse>
                      </Container>
                </Navbar>
            </Styles>
    )
}

export default Navibar;