import React from "react";
import {Card} from  "react-bootstrap";


export const ShopWindowCard = ({id,image,title,text,clothesItem}) => {
    return(
        <Card key={id} style={{ width: '18rem', minHeight: "400px", maxHeight: "470px", margin:"0 auto" }}>
        <Card.Img variant="top" src={image}/>
              <Card.Body>
                 <Card.Title>{title}</Card.Title>
                 <Card.Text>{text}</Card.Text>
              </Card.Body>
        </Card>
    )
}