import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import cls from "../Styles/Requisites.module.scss";

const requisites = ["ООО «Clothes-Team»", "Юридически адрес: 123456, г. Гомель, улица Катунина, д. 4", "Почтовый адрес: 123456, г. Гомель, улица Катунина, д. 4",
    "ИНН: 7712345678", "КПП: 779101001", "БИК: 044521234", "Р/С: 40702810123450101230", "К/С: 30101234500000000225", "ОГРН: 1047712345678"];

export const Requisites = () => {
    return (
        <>
            <Container className="w-100 my-4 text-center" style={{ overflow: "hidden" }}>
                <h3 className={cls.title}>Реквизиты</h3>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col><ul className={cls.menu}>
                        {requisites.map((item, index) => {
                            return <li key={index} className={cls.menuItem}>{item}</li>
                        })}
                    </ul>
                    </Col>
                    <Col>
                        <iframe className={cls.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2045.8760749141554!2d31.007185889356972!3d52.42534158672725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d4684d7e021055%3A0x67b1fb980e382db3!2z0KLQpiDQk9Cw0LvQtdGA0LXRjw!5e0!3m2!1sru!2sby!4v1655739612023!5m2!1sru!2sby"></iframe>
                    </Col>
                </Row>
            </Container>
        </>
    )
}











