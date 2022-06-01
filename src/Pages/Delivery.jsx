import React from "react";
import Subtitle from "../Components/Subtitle";
import {Questions} from "../Components/Questions"; 
import {Col, Container, Row} from  "react-bootstrap";
import cls from "../Styles/Delivery.module.scss";
import post1 from "../IMG/PostBelpng.png";
import post2 from "../IMG/Delivery.png";




const Delivery = () => {
    return(
        <>
        <Subtitle title='Доставка'/>
        <Container className="p-4" style={{overflow: "hidden"}}>
            <Row >
            <Col xs={5}><div className={cls.deliveryImg}><img src={post2}/></div></Col>
                <Col xs={7}>
                    <h3 className={cls.deliveryTitle}>Почта России</h3>
                    <ul className={cls.menu}>
                        <li className={cls.menuItem}>Сроки доставки: от 5 рабочих дней.</li>
                        <li className={cls.menuItem}>Пересылка до востребования.</li>
                        <li className={cls.menuItem}>Стоимость доставки: от 400 руб., в зависимости от удаленности и количества изделий.</li>
                        <li className={cls.menuItem}>Отслеживание отправлений</li>
                    </ul>
                </Col>
            </Row>
            <Row>
            <Col xs={5}><div className={cls.deliveryImg}><img src={post1}/></div></Col>
                <Col xs={7}>
                    <h3 className={cls.deliveryTitle}>Белпошта</h3>
                    <ul className={cls.menu}>
                        <li className={cls.menuItem}>Сроки доставки: 1-5 рабочих дней.</li>
                        <li className={cls.menuItem}>Пересылка до востребования.</li>
                        <li className={cls.menuItem}>Стоимость доставки: от 35 беларусских руб. в зависимости от удаленности.</li>
                        <li className={cls.menuItem}>Отслеживание отправлений</li>
                    </ul>
                </Col>
            </Row>
            <Row>
            <Col xs={5}><div className={cls.deliveryImg}><img src={post2}/></div></Col>
                <Col xs={7}>
                    <h3 className={cls.deliveryTitle}>СДЭК САМОВЫВОЗ</h3>
                    <ul className={cls.menu}>
                        <li className={cls.menuItem}>Сроки доставки: 1-5 рабочих дней.</li>
                        <li className={cls.menuItem}>Пересылка до востребования.</li>
                        <li className={cls.menuItem}>Стоимость доставки: от 350 руб. в зависимости от удаленности.</li>
                        <li className={cls.menuItem}>Отслеживание отправлений</li>
                    </ul>
                </Col>
            </Row>
        </Container>
        <Questions/>
        </>
    )
}

export default Delivery;