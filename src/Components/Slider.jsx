import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import slide1 from "../IMG/Slide1.jpg";
import slide2 from "../IMG/Slide2.jpg";
import slide3 from "../IMG/Slide3.jpg";
import styled from "styled-components";

const Styles = styled.div`
    a,h1, p {
        font-family: 'Montserrat';
        font-style: normal;
    } 
    h1{
        color: #000;
        font-weight: 500;
        font-size: 88px;
        @media screen and (max-width: 768px){
            font-size: 48px;
        }
    }
    p{
        color: #fff;
        font-weight: 400;
        font-size: 44px;
        @media screen and (max-width: 768px){
            font-size: 26px;
        }
    }
    a{
        text-decoration: none;
        color: black;
        font-size: 26px;
    }
`

export const Slider = () => {
    const [index, setIndex] = useState(0);
    const { isAuth } = useAuth();

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Styles>
            <Carousel activeIndex={index} onSelect={handleSelect} style={{ overflow: "hidden" }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                        style={{ "height": "600px" }}
                    />
                    <Carousel.Caption>
                        <h1>Три по цене двух</h1>
                        <p>Закажи три футболки, а заплати только за две.</p>
                        {isAuth ? <Button variant="light" className="me-2"><Link to="/catalog">Перейти в каталог</Link></Button> : <Button variant="light" className="me-2"><Link to="/login">Перейти в каталог</Link></Button>}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="First slide"
                        style={{ "height": "600px" }}
                    />
                    <Carousel.Caption>
                        <h1>Моя жизнь. Мой путь.</h1>
                        <p>Обувь такая комфортная, что всё вокруг кажется незаметным.</p>
                        {isAuth ? <Button variant="light" className="me-2"><Link to="/catalog">Перейти в каталог</Link></Button> : <Button variant="light" className="me-2"><Link to="/login">Перейти в каталог</Link></Button>}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="First slide"
                        style={{ "height": "600px" }}
                    />
                    <Carousel.Caption>
                        <h1>Одежды всегда не хватает</h1>
                        <p>Для самых элегантных и утонченных. Для самого требовательного стиля.</p>
                        {isAuth ? <Button variant="light" className="me-2"><Link to="/catalog">Перейти в каталог</Link></Button> : <Button variant="light" className="me-2"><Link to="/login">Перейти в каталог</Link></Button>}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Styles>
    )
}
