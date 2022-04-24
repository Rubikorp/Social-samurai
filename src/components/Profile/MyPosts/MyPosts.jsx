import s from "./MyPosts.module.css"
import React from "react";
import Post from "./Post/Post"
import {Btn} from "../../UI/Buttons"

const MyPosts = () => {
    let postData = [
        {id:1, message:'Hi, how are you?', like: 3},
        {id:2, message:'Its my first post', like: 4}
    ]
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
                <Post message={postData[0].message} likesCount={postData[0].like}/>
                <Post message={postData[1].message} likesCount={postData[1].like}/>
            </div>
        </div>
    )
};

export default MyPosts