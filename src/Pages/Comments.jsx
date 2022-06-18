import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { fetchComments } from "../redux/comments/ActionCreator";
import { setComment } from "../redux/comments/reducer";
import Subtitle from "../Components/Subtitle";
import Comment from "../Components/Comment";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../firebase';

const Comments = () => {


    // const sendMessage = async (userInput) => {
    //     const docRef = await addDoc(collection(db, "messages"), {
    //         id: new Date(),
    //         uid: id,
    //         name: login,
    //         body: userInput,
    //         email,
    //     });
    //     const querySnapshot = await getDocs(collection(db, "messages"));
    //      querySnapshot.forEach((doc) => {
    //       console.log(doc.data());
    //     });
    // }
    // const addComment = useCallback(sendMessage);
    
    const { email, id, login } = useAuth();
    
    const dispatch = useDispatch();

    const comments = useSelector((state) => state.comments.comments);
    const isLoading = useSelector((state) => state.comments.isLoading);
    const userComments = useSelector((state) => state.comments.userComments);
    const error = useSelector((state) => state.comments.error);


    const userComment = (userInput) => {
        const comment = { id: new Date(), name: login, body: userInput, email, uid: id, };
        const docRef = addDoc(collection(db, "messages"), comment);
        return comment;
    }
    const newComment = (userInput) => {
        dispatch(setComment(userComment(userInput)));
    }

    const addComment = useCallback(newComment);


    useEffect(() => {
        dispatch(fetchComments());
    }, [])

    return (
        <>
            <Subtitle title="Отзывы" />
            {isLoading && <Loader />}
            {error && <h2>{error}</h2>}
            {comments.map(comment => {
                return (
                    <Comment
                        comment={comment}
                        key={comment.id}
                        name={comment.name}
                        body={comment.body}
                        image="https://st3.depositphotos.com/19428878/37102/v/170/depositphotos_371028948-stock-illustration-gentleman-avatar-profile-icon-image.jpg?forcejpeg=trueS"
                        mail={comment.email} />
                )
            })}
            {userComments.map(userComment => {
                return (
                    <Comment
                        comment={userComment}
                        key={userComment.id}
                        name={userComment.name}
                        body={userComment.body}
                        image="https://st3.depositphotos.com/19428878/37102/v/170/depositphotos_371028948-stock-illustration-gentleman-avatar-profile-icon-image.jpg?forcejpeg=trueS"
                        mail={userComment.email} />
                )
            })}
            {/* {mess.map(userComment => {
                return(
                    <Comment
                    uid={userComment.uid}
                    comment={userComment}
                    key={userComment.id}
                    name={userComment.name}
                    body={userComment.body}
                    image="https://st3.depositphotos.com/19428878/37102/v/170/depositphotos_371028948-stock-illustration-gentleman-avatar-profile-icon-image.jpg?forcejpeg=trueS"
                    mail={userComment.email}/>
                )
            })} */}
            <Message addComment={addComment} />
        </>
    )
}
export default Comments; 