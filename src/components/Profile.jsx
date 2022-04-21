import React from "react";
import BgProfile from "../static/Bg-profile.jpg"
import s from "./Profile.module.css"

const Profile = () => {
    return (
        <div className={s.content}>
            <img className={s.content__img}src={BgProfile}/>
            <div className={s.containe}>
                <div>
                    ava +dscr
                </div>
                <div>
                    my post
                    <div>
                        n post
                    </div>
                    <div>
                        post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile