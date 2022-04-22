import s from "./MyPosts.module.css"
import React from "react";
import Post from "./Post/Post"

const MyPosts = () => {
    return (
        <div className={s.containe}>
            My post
            <div className={s.myPost}>
                <textarea placeholder="your news.."></textarea>
                <div className={s.buttons}>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>

            <div className={s.posts}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
};

export default MyPosts