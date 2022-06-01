import React from "react";
import {Container} from  "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cls from "../Styles/Example.module.scss";
import example1 from "../IMG/Example1.png";
import example2 from "../IMG/Example2.png";
import example3 from "../IMG/Example3.png";

export const  Examples = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return(
        <>
        <Container className="text-center my-5">
            <h2 className={cls.exampleTitle}>Примеры наших работ:</h2>
            <Slider {...settings}>
                <div className={cls.exampleImg}><img src={example1}/></div>
                <div className={cls.exampleImg}><img src={example2}/></div>
                <div className={cls.exampleImg}><img src={example3}/></div>
                <div className={cls.exampleImg}><img src={example1}/></div>
                <div className={cls.exampleImg}><img src={example3}/></div>
            </Slider>
        </Container>
        </>
    )
}