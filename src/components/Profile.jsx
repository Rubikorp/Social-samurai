import React from "react";
import BgProfile from "../static/Bg-profile.jpg"

const Profile = () => {
    return (
        <div className="content">
            <img className="content__img" src={BgProfile}/>
            <div className="containe">
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