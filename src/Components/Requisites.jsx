import React from "react";
import {Col, Container, Row} from  "react-bootstrap";
// import { MapOfShop } from "./MapOfShop";
import map  from "../IMG/map.png";
import cls from "../Styles/Requisites.module.scss";

const requisites = ["ООО «Clothes-Team»", "Юридически адрес: 123456, г. Гомель, ул. Троллейбусная, д. 12В", "Почтовый адрес: 123456, г. Гомель, ул. Троллейбусная, д. 12В",
 "ИНН: 7712345678", "КПП: 779101001", "БИК: 044521234", "Р/С: 40702810123450101230", "К/С: 30101234500000000225", "ОГРН: 1047712345678"];

export const Requisites = () => {
    return(
        <>
        <Container className="w-100 my-4 text-center" style={{overflow: "hidden"}}>
            <h3 className={cls.title}>Реквизиты</h3>
            <Row className="d-flex justify-content-center align-items-center">
                <Col><ul className={cls.menu}>
                    {requisites.map((item,index)=>{
                       return <li key={index} className={cls.menuItem}>{item}</li>
                    })}
                    </ul>
                </Col>
                <Col>
                <img className={cls.img} src={map}/>
                </Col>
            </Row>
            {/* <Row>
                <MapOfShop/>
            </Row> */}
        </Container>
        </>
    )
}











