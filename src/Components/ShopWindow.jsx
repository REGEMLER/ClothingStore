import React from "react";
import ShopWindowCard from "./ShopWindowCard";
import tShort from "../IMG/t-short.png";
import bickl from "../IMG/bickl.png";
import boots from "../IMG/boots.png";
import invent from "../IMG/invent.png";
import equip from "../IMG/equip.png";
import mask from "../IMG/mask.png";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
     h2{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
        @media screen and (max-width: 768px){
            font-size: 48px;
        }
    } 
`

export const ShopWindow = () => {
    return (
        <Container className="my-5 text-center text-md-start" style={{ overflow: "hidden" }}>
            <Styles><h2>Богатый выбор</h2></Styles>
            <Row className="my-3">
                <Col className="my-2 my-sm- d-flex justify-content-center"><ShopWindowCard image={tShort} title="Верх" text="Футболки, майки" /></Col>
                <Col className="my-2 my-sm-0 d-flex justify-content-center"><ShopWindowCard image={invent} title="Инвентарь" text="Магнезия для гиревого спорта" /></Col>
                <Col className="my-2 my-sm-0 d-flex justify-content-center"><ShopWindowCard image={boots} title="Обувь" text="Штангетки" /></Col>
            </Row>
            <Row className="my-3">
                <Col className="my-2 my-sm-0 d-flex justify-content-center"><ShopWindowCard image={bickl} title="Низ" text="Велосипедки, леггинсы" /></Col>
                <Col className="my-2 my-sm-0 d-flex justify-content-center"><ShopWindowCard image={equip} title="Экипировка" text="Ремни тяжелоатлетические" /></Col>
                <Col className="my-2 my-sm-0 d-flex justify-content-center"><ShopWindowCard image={mask} title="Маски" text="Медицинские с готовым и индивидуальным дизайном" /></Col>
            </Row>
        </Container>
    )
}