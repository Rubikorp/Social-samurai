import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostCreator());
    };

    let onPostChange =(text) => {
        let action = updateNewPostTextCreator(text)
        props.store.dispatch(action)
    }


    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            postData={state.profilePages.postData}
            newPostText={state.profilePages.newPostText}
        />)
};

export default MyPostsContainer