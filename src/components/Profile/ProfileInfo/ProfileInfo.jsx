import React from "react";
import s from "../Profile.module.css";
import Preloaded from "../../Preolader/Preloader";
import userPhoto from '../../../assets/img/user.jpg';
import ProfileStatus from "../ProfileStatus/ProfileStatus";


const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloaded />
  }
  let contacts = Object.entries(props.profile.contacts).map(p =>
    p[1] !== null && p[1] !== ''
      ? <div className={s.link__item}>{p[0]} : <a className={s.link} href={p[1]}>{p[1]}</a></div>
      : '')
    return (
        <div className={s.container__aboutMe}>

            {/*Аватарка*/}

            <img src={
              props.profile.photos.large !== null
                ? props.profile.photos.large
                : userPhoto
            } alt="avatar"/>

            {/*Обо мне*/}

            <div className={s.aboutMe}>
              <h2>
	              {props.profile.fullName}
	              {props.profile.lookingForAJob
		              ? <span>&#128029;</span>
		              : <span>&#10062;</span>
	              }
              </h2>

              {/*Статус*/}

              <ProfileStatus
                status={props.status}
                updateStatus={props.updateStatus}
              />
              {/*Обо мне*/}
              <div className={s.jobs}>
	              Сведения о работе:
	              {props.profile.lookingForAJobDescription !== null
		              ? <div>{props.profile.lookingForAJobDescription}</div>
		              : <div>Отдыхаю <span>&#9989;</span></div>}
              </div>


              {/*Контакты*/}

                <div className={s.contacts}>
                  Контакты:
                  {contacts}
                </div>
              </div>
        </div>
    )
}
export default ProfileInfo