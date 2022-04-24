import s from "./MyPosts.module.css"
import React from "react";
import Post from "./Post/Post"
import {Btn} from "../../UI/Buttons"

const MyPosts = () => {
    let postData = [
        {id:1, message:'Hi, how are you?', like: 3},
        {id:2, message:'Its my first post', like: 4}
    ]
    let postElement = postData
        .map(p => <Post message={p.message} likeCoun={p.like} />)
    return (
        <div className={s.containe}>
            <div className='color__font__white'>My post</div>
            <div className={s.myPost}>
                <textarea placeholder="your news.."></textarea>
                <div className={s.buttons}>
                    <Btn text="Add post" />
                </div>
            </div>

            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
};

export default MyPosts