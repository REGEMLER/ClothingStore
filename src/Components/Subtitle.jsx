import React from "react";
import styled from "styled-components";
import {Container} from  "react-bootstrap";


const Styles = styled.div`
    div {
        background: #EAEAEA;
        padding:20px;
    } 
    h2{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 60px;
    }
`

export const Subtitle = ({title}) => {
    return (
        <Styles><div><Container><h2>{title}</h2></Container></div></Styles>
    )
}