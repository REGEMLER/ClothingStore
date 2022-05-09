import React,{useState} from "react";
import {Carousel, Button} from  "react-bootstrap";
import {Link} from  "react-router-dom";
import slide1 from "../IMG/Slide1.jpg";
import slide2 from "../IMG/Slide2.jpg";
import slide3 from "../IMG/Slide3.jpg";
import styled from "styled-components";

const Styles = styled.div`
    a,h3, p {
        font-family: 'Montserrat';
        font-style: normal;
    } 
    h3{
        color: #000;
        font-weight: 500;
        font-size: 88px;
    }
    p{
        color: #fff;
        font-weight: 400;
        font-size: 44px;
    }
    a{
        text-decoration: none;
        color: black;
        font-size: 26px;
    }
`

 export const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Styles>
        <Carousel activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item>
                     <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                    style={{"height": "600px"}}
                     />
                        <Carousel.Caption>
                            <h3>3=2</h3>
                            <p>Закажи три футболки, а заплати только за две.</p>
                            <Button variant="light" className="me-2"><Link to="/catalog">Перейти в каталог</Link></Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                     <img
                    className="d-block w-100"
                    src={slide2}
                    alt="First slide"
                    style={{"height": "600px"}}
                     />
                        <Carousel.Caption>
                            <h3>Моя жизнь. Мой путь.</h3>
                            <p>Обувь такая комфортная, что всё вокруг кажется незаметным.</p>
                            <Button variant="light" className="me-2"><Link to="/catalog">Перейти в каталог</Link></Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                     <img
                    className="d-block w-100"
                    src={slide3}
                    alt="First slide"
                    style={{"height": "600px"}}
                     />
                        <Carousel.Caption>
                            <h3>Одежды всегда не хватает</h3>
                            <p>Для самых элегантных и утонченных. Для самого требовательного стиля.</p>
                            <Button variant="light" className="me-2"><Link to="/catalog">Перейти в каталог</Link></Button>
                        </Carousel.Caption>
                    </Carousel.Item>
        </Carousel>
        </Styles>

    )
}
