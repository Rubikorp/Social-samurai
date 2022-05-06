import styles from "./MyPosts.module.css"
import React from "react";
import Post from "./Post/Post"
import {Btn} from "../../UI/Buttons"


const MyPosts = (props) => {
    let onAddPost = () => {
        props.addPost()
    };

    let onPostChange =(e) => {
        let text = e.target.value;
        props.onPostChange(text)
    }


    let postElement = props.postData
        .map(p => (<Post message={p.message} likesCount={p.like} />))
    return (
        <div className={styles.container}>
            <div className='color__font__white'>My post</div>
            <div className={styles.myPost}>
                <textarea
                    onChange={onPostChange}
                    placeholder="your news.."
                    value={props.newPostText}/>
                <div className={styles.buttons}>
                    <Btn addPost={onAddPost} text="Add post" />
                </div>
            </div>

            <div className={styles.posts}>
                {postElement}
            </div>
        </div>
    )
};

export default MyPosts