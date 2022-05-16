import React from "react";
import {Card} from  "react-bootstrap";
import styled from "styled-components";
import {Link} from  "react-router-dom";
const Styles = styled.div`
    .card {
        margin: 0 auto;
        transition: all linear .4s;
        &:hover{
            transform: scale(1.05);
        }
    } 
    .categoryLink{
        text-decoration: none;
        color: black;
    } 
`

export const CategoryCard = ({id,image,title,text,showCard,clothesItem}) => {

    return(<Styles>
        <Card onClick={()=>{showCard(clothesItem.id)}} key={id} style={{ width: '18rem', minHeight: "400px", maxHeight: "470px" }}>
        <Link className="categoryLink" to="/product1">
        <Card.Img variant="top" src={image}/>
              <Card.Body>
                 <Card.Title>{title}</Card.Title>
                 <Card.Text>{text}</Card.Text>
              </Card.Body>
         </Link>
        </Card>
        </Styles>
    )
}