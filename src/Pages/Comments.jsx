import React,{useEffect, useState, useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { fetchComments } from "../redux/comments/ActionCreator";
import Subtitle from "../Components/Subtitle";
import Comment from "../Components/Comment";
import Message from "../Components/Message";
import Loader from "../Components/Loader";

const  Comments = () => {
    const {email,id,login} = useAuth(); 
    const comments = useSelector((state) => state.comments.comments);
    const isLoading = useSelector((state) => state.comments.isLoading);
    const error = useSelector((state) => state.comments.error);
    const dispatch = useDispatch();

    const [userComments, setUserComments] = useState([]); 
    const newComment = (userInput) => {
        const comment = {id, name: login, body: userInput, email};
        setUserComments([...userComments,comment]);
    }
    const addComment = useCallback(newComment);

    useEffect(()=>{
        dispatch(fetchComments());
        },[])
    return(
        <>
            <Subtitle title="Отзывы"/>
            {isLoading && <Loader/>}
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