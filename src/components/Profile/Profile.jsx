import React from "react";
import BgProfile from "../../static/Bg-profile.jpg"
import Avatar from "../../static/Cyberpunk_2077_Samurai.webp"
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts.jsx"

const Profile = () => {
    return (
        <div className={s.content}>
            <img className={s.content__img}src={BgProfile}/>
            <div className={s.containe}>
                <div className={s.containe__aboutMe}>
                    <img src={Avatar} alt="avatar"/>
                    <div className={s.aboutMe}>
                        <h2>Ruslan B.</h2>
                        <div className={s.abouteMeDscr}>
                            <div>Date of Birth: 15 february</div>
                            <div>City: Sterlitamak</div>
                            <div>Education: BGU</div>
                            <div>Web site: ...</div>
                        </div>
                    </div>
                </div>
                <MyPosts />
            </div>
        </div>
    )
};

export default Profile