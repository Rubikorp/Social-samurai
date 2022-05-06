import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/img/user.jpg';
import {NavLink} from "react-router-dom";
import * as axios from 'axios';

const Users = (props) => {
	let  pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
	let pages = [];
	for (let i=1; i <= pagesCount; i++) {
		pages.push(i)
	}
	return (
		<div className={"container bg " + styles.container__users}>
			{
				props.users.map(u => <div className={styles.user__item} key={u.id}>
					<div className={styles.users__left}>
						<div>
							<NavLink to={'/profile/' + u.id}>
								<img
									className={styles.users__avatar}
									src={u.photos.small != null
										? u.photos.small
										: userPhoto} alt=""/>
							</NavLink>
						</div>
						<div>
							<button
								className={u.followed
									? styles.btn__unfollowed
									: styles.btn__followed}
								onClick={u.followed
									? () => { props.deleteFollowUser(u.id).then(data => {
										if(data.resultCode === 0) {
											props.unFollow(u.id)
										}
									})
									}
									: () => { props.postFollowUser(u.id).then(data => {
										if(data.resultCode === 0) {
											props.follow(u.id)
										}
									})
								}}>
								{u.followed ? 'Unfollowed' : 'Followed'}
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
						className={props.currentPage === p
						&& styles.selected_page}
						onClick={(e) => {
							props.onPageChanged(p)
						}}

					>{p}</button>)
				})}
			</div>
		</div>
	)
}

export default Users