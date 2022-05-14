import styles from "./MyPosts.module.css"
import React from "react";
import Post from "./Post/Post"
import FormNewPost from "./Form";


const MyPosts = (props) => {
    let onAddPost = (post) => {
        props.addPost(post)
    };

    let postElement = props.postData
        .map(p => (<Post message={p.message} likesCount={p.like} />))
    return (
        <div className={styles.container}>
            <div className='color__font__white'>My post</div>
            <div className={styles.myPost}>
                <FormNewPost onAddPost={onAddPost} />
            </div>

            <div className={styles.posts}>
                {postElement}
            </div>
        </div>
    )
};

export default MyPosts