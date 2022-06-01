import React from "react";
import {Col, Container, Row} from  "react-bootstrap";
import map  from "../IMG/map.png";
import cls from "../Styles/Requisites.module.scss";

export const Requisites = () => {
    return(
        <>
        <Container className="w-100 my-4 text-center">
            <h3 className={cls.title}>Реквизиты</h3>
            <Row className="d-flex justify-content-center align-items-center">
                <Col><ul className={cls.menu}>
                    <li className={cls.menuItem}>ООО «Clothes-Team»</li>
                    <li className={cls.menuItem}>Юридически адрес: 123456, г. Москва, ул. Подвойского, д. 14, стр. 7</li>
                    <li className={cls.menuItem}>Почтовый адрес:	123456, г. Москва, ул. Подвойского, д. 14, стр. 7</li>
                    <li className={cls.menuItem}>ИНН: 7712345678</li>
                    <li className={cls.menuItem}>КПП: 779101001</li>
                    <li className={cls.menuItem}>БИК: 044521234</li>
                    <li className={cls.menuItem}>Р/С: 40702810123450101230 </li>
                    <li className={cls.menuItem}>К/С: 30101234500000000225</li>
                    <li className={cls.menuItem}>ОГРН: 1047712345678</li>
                    </ul></Col>
                <Col>
                <img className={cls.img} src={map}/>
                </Col>
            </Row>
        </Container>
        </>
    )
}











