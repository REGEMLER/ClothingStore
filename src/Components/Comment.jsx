import React from "react";
import cls from "../Styles/Comment.module.scss";
import {useDispatch} from "react-redux";
import { deleteComment} from "../redux/comments/reducer";

const Comment = ({comment,name,body,image,email,isUsers}) => {

    const dispatch = useDispatch();

    const removeComment = () => {
        dispatch(deleteComment(comment.id))
    }
    return(
        <>
        <div className={cls.comment}>
            <div className={cls.container}>
            <div className={cls.avatar}><img src={image} alt=""/></div>
            <div className={cls.content}>
                <h2 className={cls.name}>{name}</h2>
                <h3 className={cls.email}>{email}</h3>
                <p className={cls.text}>{body}</p>
            </div>
            {isUsers ? <button onClick={removeComment} className={cls.btn}>Удалить</button>: null}
            </div>
        </div>
        </>
    )
}

export default React.memo(Comment);