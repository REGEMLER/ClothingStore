import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import cls from "../Styles/Popular.module.scss";

const PopularItem = ({ id, img, name, price }) => {
    const { isAuth } = useAuth();
    return (
        <Col key={id}>
            <div className={cls.popularImg}><img src={img}></img></div>
            <div className={cls.popularContent}>
                <div className={cls.popularText}>
                    <p className={cls.popularTitle}>{name}</p>
                    <p className={cls.popularPrice}>{price} ₽</p>
                </div>
                {isAuth ? <button className={cls.popularBtn}><Link className={cls.popularLink} to="/catalog">Каталог</Link></button> : <button className={cls.popularBtn}><Link className={cls.popularLink} to="/login">Каталог</Link></button>}
            </div>
        </Col>
    )
}
export default React.memo(PopularItem)