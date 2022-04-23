import React from "react";
import s from "./Post.module.css"
import {BtnLike} from "../../../UI/Buttons";


const Post = (props) => {
    return (
        <div className={s.postContaine}>
            <div className={s.item}>
                <span></span>
                <p>{props.message}</p>
            </div>
            <div className={s.btn__containe}>
                <BtnLike text="Like" />
                <div>{props.likesCount}<span> &#10084;</span></div>
            </div>
        </div>
    )
}

export default Post