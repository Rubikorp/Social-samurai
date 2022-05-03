import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/img/user.jpg"

class Users extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.users.length === 0 ) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          this.props.setUsers(response.data.items)
        });
    }
  }

  render() {
    return (
      <div className="container bg">
        {
          this.props.users.map(u => <div className={styles.user__item} key={u.id}>
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
                    ? () => {
                      this.props.unFollow(u.id)
                    }
                    : () => {
                      this.props.follow(u.id)
                    }}>
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
}

export default Users;