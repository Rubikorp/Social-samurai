import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/img/user.jpg"

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.users.length === 0 ) {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items)
          this.props.setTotalUsersCount(response.data.totalCount)
        });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items)
        });
  }

  render() {
    let  pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div className={"container bg " + styles.container__users}>
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
                <div className={styles.user__status}>
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
        <div>
          {pages.map(p => {
            return (<button
              className={this.props.currentPage === p
              && styles.selected_page}
              onClick={(e) => {
                this.onPageChanged(p)
              }}

            >{p}</button>)
          })}
        </div>
      </div>
    )
  }
}

export default Users;