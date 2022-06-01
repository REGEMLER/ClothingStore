import React from "react";
import { useDispatch } from "react-redux";
import {Card} from  "react-bootstrap";
import styled from "styled-components";
import {Link} from  "react-router-dom";
import { setCurrentCard } from "../redux/card/reducer";
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
        font-family: 'Montserrat';
    } 
`
 const CategoryCard = ({id,image,title,text,clothesItem}) => {

    const dispatch = useDispatch(); 
    const handleClick = () => {
        dispatch(setCurrentCard(clothesItem));
    }

    return(<Styles>
        <Card onClick={handleClick} key={id} style={{ width: '18rem', minHeight: "400px", maxHeight: "470px" }}>
        <Link className="categoryLink" to="/product">
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

export default React.memo(CategoryCard);