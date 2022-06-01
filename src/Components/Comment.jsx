import React from "react";
import cls from "../Styles/Comment.module.scss";

const Comment = ({comment,name,body,image,email}) => {
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
            </div>
        </div>
        </>
    )
}

export default React.memo(Comment);