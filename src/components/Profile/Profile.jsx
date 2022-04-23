import React from "react";
import BgProfile from "../../static/Bg-profile.jpg"
import Avatar from "../../static/Cyberpunk_2077_Samurai.webp"
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts.jsx"

const Profile = () => {
    return (
        <div className={s.content}>
            <img className={s.content__img} src={BgProfile}/>
            <div className='container'>
                <ProfileInfo />
                <MyPosts />
            </div>
        </div>
    )
};

export default Profile