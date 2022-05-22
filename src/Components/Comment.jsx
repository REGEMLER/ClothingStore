import React from "react";
import cls from "../Styles/Styles.modules.scss";

export const Comment = ({comment,name,body,image,email}) => {
    return(
        <>
        <div className="comment-container">
            <div className="comment-flex">
            <div className="comment-avatar"><img src={image} alt=""/></div>
            <div className="comment-content">
                <h2 className="comment-name">{name}</h2>
                <h3 className="comment-email">{email}</h3>
                <p className="comment-text">{body}</p>
            </div>
            </div>
        </div>
        </>
    )
}