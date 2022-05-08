import React from "react";
import BgProfile from "../../static/Bg-profile.jpg"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <img className={s.content__img} src={BgProfile} alt="img"/>
            <div className='container'>
                <ProfileInfo
                  profile={props.profile}
                />
                <MyPostsContainer />
            </div>
        </div>
    )
};

export default Profile