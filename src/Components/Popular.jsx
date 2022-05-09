import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import cls from "../Styles/Delivery.modules.scss";
import bickl from "../IMG/bickl.png";
import tShort from "../IMG/t-short.png";
import mask from "../IMG/mask.png";

 export const Popular =() => {
    return(
        <section>
            <Container fluid="md">
                <h2>Популярные товары</h2>
                <Row>
                    <Col>
                        <div className="popularImg"><img src={bickl}></img></div>
                        <div className="popularContent">
                            <div className="popularText">
                                <p className="popularTitle">Магнезия жесткая</p>
                                <p className="popularPrice">750 ₽</p>
                            </div>
                            <button>В корзину</button>
                        </div>
                    </Col>
                    <Col>
                        <div className="popularImg"><img src={tShort}></img></div>
                        <div className="popularContent">
                        <div className="popularText">
                                <p className="popularTitle">Футболка мужская</p>
                                <p className="popularPrice">7050 ₽</p>
                            </div>
                            <button>В корзину</button>
                        </div>
                    </Col>
                    <Col>
                        <div className="popularImg"><img src={mask}></img></div>
                        <div className="popularContent">
                        <div className="popularText">
                                <p className="popularTitle">Маска для лица</p>
                                <p className="popularPrice">150 ₽</p>
                            </div>
                            <button>В корзину</button>
                        </div>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}