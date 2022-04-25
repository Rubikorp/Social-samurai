import s from "./MyPosts.module.css"
import React from "react";
import Post from "./Post/Post"
import {Btn} from "../../UI/Buttons"



const MyPosts = (props) => {

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = "";
    };


    let postElement = props.postData
        .map(p => (<Post message={p.message} likesCount={p.like} />))
    return (
        <div className={s.containe}>
            <div className='color__font__white'>My post</div>
            <div className={s.myPost}>
                <textarea
                    ref={newPostElement}
                    placeholder="your news.."></textarea>
                <div className={s.buttons}>
                    <Btn addPost={addPost} text="Add post" />
                </div>
            </div>

            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
};

export default MyPosts