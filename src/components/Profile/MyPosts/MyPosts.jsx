import s from "./MyPosts.module.css"
import React from "react";
import Post from "./Post/Post"
import {Btn} from "../../UI/Buttons"
import {addPostCreator, updateNewPostTextCreator} from "../../../Redux/state";


const MyPosts = (props) => {

    let addPost = () => {
        props.dispatch(addPostCreator());
    };

    let onPostChange =(e) => {
        let text = e.target.value;
        let action = updateNewPostTextCreator(text)
        props.dispatch(action)
    }


    let postElement = props.postData
        .map(p => (<Post message={p.message} likesCount={p.like} />))
    return (
        <div className={s.containe}>
            <div className='color__font__white'>My post</div>
            <div className={s.myPost}>
                <textarea
                    onChange={onPostChange}
                    placeholder="your news.."
                    value={props.newPostText}/>
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