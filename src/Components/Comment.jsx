import React from "react";
import cls from "../Styles/Styles.modules.scss";

export const Comment = ({comment,name,lastName,image,email}) => {
    return(
        <>
        <div className="comment-container">
            <div className="comment-flex">
            <div className="comment-avatar"><img src={image} alt=""/></div>
            <div className="comment-content">
                <h2 className="comment-name">{name} {lastName}</h2>
                <h3 className="comment-email">{email}</h3>
                <p className="comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reprehenderit maiores quam, dolorem laudantium, nostrum nemo perspiciatis labore doloremque aliquam mollitia voluptatem perferendis dignissimos, velit iste ducimus id! Laboriosam quasi expedita tempore, officiis voluptatum nam dolore, soluta dignissimos facere quibusdam magni quidem? Illum magni perspiciatis consequuntur hic voluptas blanditiis nobis.</p>
            </div>
            </div>
        </div>
        </>
    )
}