import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/img/user.jpg"

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {

      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          debugger;
          props.setUsers(response.data.items)
        })
    }

        // props.setUsers([
        //     {
        //         id:1,
        //         photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2_%2808-04-2022%29.jpg/220px-%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2_%2808-04-2022%29.jpg',
        //         followed: false,
        //         fullName:'Ruslan',
        //         status: 'I am a boss',
        //         location: {
        //             city: 'Sterlitamak',
        //             country: 'Russian Federation'
        //         }
        //     },
        //     {
        //         id:2,
        //         photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2_%2808-04-2022%29.jpg/220px-%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2_%2808-04-2022%29.jpg',
        //         followed: false,
        //         fullName:'Elina',
        //         status: 'I am a boss',
        //         location: {
        //             city: 'Sterlitamak',
        //             country: 'Russian Federation'
        //         }
        //     },
        //     {
        //         id:3,
        //         photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2_%2808-04-2022%29.jpg/220px-%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2_%2808-04-2022%29.jpg',
        //         followed: true,
        //         fullName:'Victor',
        //         status: 'I am a boss',
        //         location: {
        //             city: 'Moscow',
        //             country: 'Russian Federation'
        //         }
        //     },
        //     {
        //         id:4,
        //         photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2_%2808-04-2022%29.jpg/220px-%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2_%2808-04-2022%29.jpg',
        //         followed: true,
        //         fullName:'Alexsey',
        //         status: 'I am a boss',
        //         location: {
        //             city: 'Kiev',
        //             country: 'Ukraina'
        //         }
        //     },
        //     {
        //         id:5,
        //         photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2_%2808-04-2022%29.jpg/220px-%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2_%2808-04-2022%29.jpg',
        //         followed: false,
        //         fullName:'Salo',
        //         status: 'I am a boss',
        //         location: {
        //             city: 'Minsk',
        //             country: 'Belarus'
        //         }
        //     },
        //
        // ])
    }

    return (
        <div className="container bg">
            <button
              className={styles.btn__followed}
              onClick={getUsers}>Get Users</button>
            {
                props.users.map(u => <div className={styles.user__item} key={u.id}>
                    <div className={styles.users__left}>
                        <div>
                            <img
                              className={styles.users__avatar}
                              src={u.photos.small != null
                                ? u.photos.small
                                : userPhoto} alt=""/>
                        </div>
                        <div>
                            <button
                                className={u.followed
                                    ? styles.btn__followed
                                    : styles.btn__unfollowed}
                                onClick={u.followed
                                    ? () => {props.unFollow(u.id)}
                                    : () => {props.follow(u.id)}}>
                                {u.followed ? 'Followed' : 'Unfollowed'}
                            </button>
                        </div>
                    </div>
                    <div className={styles.users__right}>
                        <div className={styles.user__info}>
                            <div className={styles.username}>
                                {u.name}
                            </div>
                            <div className={styles.userstatus}>
                                {u.status}
                            </div>
                        </div>
                        <div className={styles.user__location}>
                            Country:
                            <div>{"u.location.country"}</div>
                            City:
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;