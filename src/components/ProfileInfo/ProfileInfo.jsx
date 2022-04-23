import React from "react";
import s from "../Profile/Profile.module.css";
import Avatar from "../../static/Cyberpunk_2077_Samurai.webp";

const ProfileInfo = () => {
    return (
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
    )
}
export default ProfileInfo