import styles from "./MyPosts.module.css"
import React from "react";
import Post from "./Post/Post"
import FormNewPost from "./Form";


const MyPosts = React.memo(props => {
    console.log('renderR')
    let onAddPost = (post) => {
        props.addPost(post)
    };

    let postElement = props.postData
        .map(p => (<Post message={p.message} likesCount={p.like} key={p.id}/>))
    return (
        <div className={styles.container}>
            <div className='color__font__white'>My post</div>
            <div className={styles.myPost}>
                <FormNewPost onAddPost={onAddPost}/>
            </div>

            <div className={styles.posts}>
                {postElement}
            </div>
        </div>
    )})
export default MyPosts