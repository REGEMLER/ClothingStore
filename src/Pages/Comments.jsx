import React,{useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { fetchComments } from "../redux/comments/ActionCreator";
import {Subtitle} from "../Components/Subtitle";
import {Comment} from "../Components/Comment";
import {Message} from "../Components/Message";

const  Comments = () => {
    const comments = useSelector((state) => state.comments.comments);
    const isLoading = useSelector((state) => state.comments.isLoading);
    const error = useSelector((state) => state.comments.error);
    const dispatch = useDispatch();

    const [userComments, setUserComments] = useState([]); 
    const addComment = (userInput) => {
        const comment = {id: new Date(), name: "Guest", body: userInput, email: "example@.com"};
        setUserComments([...userComments,comment]);
        console.log(userComments)
    }

    useEffect(()=>{
        dispatch(fetchComments());
        },[])
    return(
        <>
            <Subtitle title="Отзывы"/>
            {isLoading && <h2>Идет загрузка</h2>}
            {error && <h2>{error}</h2>}
            {comments.map(comment => {
                return(
                    <Comment
                    comment={comment}
                    key={comment.id}
                    name={comment.name}
                    body={comment.body}
                    image="https://st3.depositphotos.com/19428878/37102/v/170/depositphotos_371028948-stock-illustration-gentleman-avatar-profile-icon-image.jpg?forcejpeg=trueS"
                    email={comment.email}/>
                )
            })}
            {userComments.map(userComment => {
                return(
                    <Comment
                    comment={userComment}
                    key={userComment.id}
                    name={userComment.name}
                    body={userComment.body}
                    image="https://st3.depositphotos.com/19428878/37102/v/170/depositphotos_371028948-stock-illustration-gentleman-avatar-profile-icon-image.jpg?forcejpeg=trueS"
                    email={userComment.email}/>
                )
            })}
            <Message addComment={addComment}/>
        </>
    )
}
export default Comments; 