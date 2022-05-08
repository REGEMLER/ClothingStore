import React from "react";
import {Card} from  "react-bootstrap";
import styled from "styled-components";
const Styles = styled.div`
    .card {
        transition: all linear .4s;
        &:hover{
            transform: scale(1.05);
        }
    } 
`

export const CategoryCard = ({id,image,title,text}) => {

    return(<Styles>
        <Card key={id} style={{ width: '18rem', minHeight: "400px" }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                 <Card.Title>{title}</Card.Title>
                 <Card.Text>{text}</Card.Text>
              </Card.Body>
        </Card>
        </Styles>
    )
}