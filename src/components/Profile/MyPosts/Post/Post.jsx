import React from "react";
import s from "./Post.module.css"


const Post = (props) => {
    return (
        <div className={s.postContaine}>
            <div className={s.item}>
                <span></span>
                <p>{props.message}</p>
            </div>
            <div className={s.btn__containe}>
                <button><span>&#128571;</span> Like</button>
                <div>{props.likesCount}<span> &#10084;</span></div>
            </div>
        </div>
    )
}

export default Post