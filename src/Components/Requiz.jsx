import React from "react";
import {Col, Container, Row} from  "react-bootstrap";
import map  from "../IMG/map.png";
import cls from "../Styles/Delivery.modules.scss";

export const Requiz = () => {
    return(
        <>
        <Container className="w-100 my-4 text-center">
            <h3>Реквизиты</h3>
            <Row className="d-flex justify-content-center align-items-center">
                <Col><ul>
                    <li>ООО «Clothes-Team»</li>
                    <li>Юридически адрес: 123456, г. Москва, ул. Подвойского, д. 14, стр. 7</li>
                    <li>Почтовый адрес:	123456, г. Москва, ул. Подвойского, д. 14, стр. 7</li>
                    <li>ИНН: 7712345678</li>
                    <li>КПП: 779101001</li>
                    <li>БИК: 044521234</li>
                    <li>Р/С: 40702810123450101230 </li>
                    <li>К/С: 30101234500000000225</li>
                    <li>ОГРН: 1047712345678</li>
                    </ul></Col>
                <Col>
                <img style={{"height": "400px", "width": "400px"}} src={map}/>
                </Col>
            </Row>
        </Container>
        </>
    )
}











