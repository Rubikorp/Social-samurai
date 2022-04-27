import s from "./MyPosts.module.css"
import React from "react";
import Post from "./Post/Post"
import {Btn} from "../../UI/Buttons"
import {type} from "@testing-library/user-event/dist/type";



const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    };

    let onPostChange =() => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text })
    }


    let postElement = props.postData
        .map(p => (<Post message={p.message} likesCount={p.like} />))
    return (
        <div className={s.containe}>
            <div className='color__font__white'>My post</div>
            <div className={s.myPost}>
                <textarea
                    ref={newPostElement}
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