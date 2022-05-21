import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { setUser } from "../redux/users/reducer";
import {Subtitle} from "../Components/Subtitle";
import {Comment} from "../Components/Comment";
import {Message} from "../Components/Message";

const  Comments = () => {
    const comments = useSelector((state) => state.users.users);
    const isUsers = comments.length > 0; 
    const dispatch = useDispatch();
    const getUsers = () => {
        return async () => {
            const res = await fetch(`https://reqres.in/api/users?page=2`);
            const { data } = await res.json();
            dispatch(setUser(data));
          };
    }
    useEffect(()=>{
        getUsers();
    })
    return(
        <>
        <Subtitle title="Отзывы"/>
            {comments.map(comment => {
                return(
                    <Comment
                    comment={comment}
                    key={comment.id}
                    name={comment.first_name}
                    lastName={comment.last_name}
                    image={comment.avatar}
                    email={comment.email}/>

                )
            })}
            <Message/>
        </>
    )
}
export default Comments; 