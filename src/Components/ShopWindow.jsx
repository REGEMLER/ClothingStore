import React from "react";
import {CategoryCard} from "./CategoryCard"; 
import tShort from "../IMG/t-short.png";
import bickl from "../IMG/bickl.png";
import boots from "../IMG/boots.png";
import invent from "../IMG/invent.png";
import equip from "../IMG/equip.png";
import mask from "../IMG/mask.png";
import { Container, Row, Col} from "react-bootstrap";
import styled from "styled-components";


const Styles = styled.div`
     h2{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
    } 
`

 export const ShopWindow = () => {
    return(
        <Container className="my-5 md-text-center">
            <Styles><h2>Что вы ищите?</h2></Styles>
            <Row className="my-3">
                <Col><CategoryCard image={tShort} title="Верх" text="Футболки, майки"/></Col>
                <Col><CategoryCard image={bickl} title="Низ" text="Велосипедки, леггинсы"/></Col>
                <Col><CategoryCard image={boots} title="Обувь" text="Штангетки"/></Col>
            </Row>
            <Row className="my-3">
                <Col><CategoryCard image={invent} title="Инвентарь" text="Магнезия для гиревого спорта"/></Col>
                <Col><CategoryCard image={equip} title="Экипировка" text="Ремни для гиревого спорта и тяжелоатлетические"/></Col>
                <Col><CategoryCard image={mask} title="Маски" text="Медицинские с готовым и индивидуальным дизайном"/></Col>
            </Row>
        </Container>
    )
}