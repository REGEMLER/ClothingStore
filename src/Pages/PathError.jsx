import React from "react";
import styled from "styled-components";
import {Container} from  "react-bootstrap";


const Styles = styled.div`
    div {
        background: #EAEAEA;
        padding:20px;
        @media screen and (max-width: 768px){
            padding: 5px;
        }
    } 
    h2{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 60px;
        text-align: center;
        @media screen and (max-width: 768px){
            font-size: 48px;
        }
    }
`

 const PathError = () => {
    return (
        <Styles><div><Container><h2>404 Страницы не сущестует</h2></Container></div></Styles>
    )
}
export default React.memo(PathError);