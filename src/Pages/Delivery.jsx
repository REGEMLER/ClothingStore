import React from "react";
import {Subtitle} from "../Components/Subtitle";
import {Questions} from "../Components/Questions"; 
import {Col, Container, Row} from  "react-bootstrap";
import cls from "../Styles/Styles.modules.scss";
import post1 from "../IMG/PostBelpng.png";
import post2 from "../IMG/Delivery.png";




const Delivery = () => {
    return(
        <>
        <Subtitle title='Доставка'/>
        <Container className="p-4 deliveryContainer">
            <Row >
            <Col xs={5}><div className="deliveryImg"><img src={post2}/></div></Col>
                <Col xs={7}>
                    <h3 className="deliveryTitle">Почта России</h3>
                    <ul>
                        <li>Сроки доставки: от 5 рабочих дней.</li>
                        <li>Пересылка до востребования.</li>
                        <li>Стоимость доставки: от 400 руб., в зависимости от удаленности и количества изделий.</li>
                        <li>Отслеживание отправлений</li>
                    </ul>
                </Col>
            </Row>
            <Row>
            <Col xs={5}><div className="deliveryImg"><img src={post1}/></div></Col>
                <Col xs={7}>
                    <h3 className="deliveryTitle">Белпошта</h3>
                    <ul>
                        <li>Сроки доставки: 1-5 рабочих дней.</li>
                        <li>Пересылка до востребования.</li>
                        <li>Стоимость доставки: от 35 беларусских руб. в зависимости от удаленности.</li>
                        <li>Отслеживание отправлений</li>
                    </ul>
                </Col>
            </Row>
            <Row>
            <Col xs={5}><div className="deliveryImg"><img src={post2}/></div></Col>
                <Col xs={7}>
                    <h3 className="deliveryTitle">СДЭК САМОВЫВОЗ</h3>
                    <ul>
                        <li>Сроки доставки: 1-5 рабочих дней.</li>
                        <li>Пересылка до востребования.</li>
                        <li>Стоимость доставки: от 350 руб. в зависимости от удаленности.</li>
                        <li>Отслеживание отправлений</li>
                    </ul>
                </Col>
            </Row>
        </Container>
        <Questions/>
        </>
    )
}

export default Delivery;