import React from "react";
import BgProfile from "../../static/Bg-profile.jpg"
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts.jsx"

const Profile = (props) => {
    return (
        <div className={s.content}>
            <img className={s.content__img} src={BgProfile}/>
            <div className='container'>
                <ProfileInfo />
                <MyPosts
                    updateNewPostText={props.updateNewPostText}
                    postData={props.state.postData}
                    addPost={props.addPost}
                    newPostText={props.state.newPostText}/>
            </div>
        </div>
    )
};

export default Profile