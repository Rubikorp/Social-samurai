import React from "react";
import s from "./Post.module.css"


const Post = () => {
    return (
        <div className={s.postContaine}>
            <div className={s.item}>
                <span></span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam aspernatur at atque aut blanditiis cupiditate dolor esse fugit ipsum itaque labore laborum magnam, modi molestiae porro quas ut vitae!</p>
            </div>
            <div className={s.btn__containe}>
                <button><span>&#128571;</span> Like</button>
                <div>0 <span>&#10084;</span></div>
            </div>
        </div>



    )
}

export default Post