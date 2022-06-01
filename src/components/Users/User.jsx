import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/img/user.jpg';
import {NavLink} from "react-router-dom";

const User = ({user, followProgress, unfollowUser, followUser}) => {
	const someUser = (array, userId) => {
		return array.some(id => id === userId)
	}
	return <div className={styles.user__item} key={user.id}>
				<div className={styles.users__left}>
					<div>
						<NavLink to={'/profile/' + user.id}>
							<img
								className={styles.users__avatar}
								src={user.photos.small != null
									? user.photos.small : userPhoto} alt=""/>
						</NavLink>
					</div>
					<div>
						<button
							className={`${user.followed
								? styles.btn__unfollowed : styles.btn__followed}
								+ ${someUser(followProgress, user.id)
								? "loading_btn__animation" : ''
							}`}
							disabled={someUser(followProgress, user.id)}
							onClick={user.followed
								? () => {
									unfollowUser(user.id)
								}
								: () => {
									followUser(user.id)
								}}>
							{user.followed ? 'Unfollowed' : 'Followed'}
						</button>
					</div>
				</div>
				<div className={styles.users__right}>
					<div className={styles.user__info}>
						<div className={styles.username}>
							{user.name}
						</div>
						<div className={styles.user__status}>
							{user.status}
						</div>
					</div>
					<div className={styles.user__location}>
						Country:
						<div>{"user.location.country"}</div>
						City:
						<div>{"user.location.city"}</div>
					</div>
				</div>
			</div>
}

export default User