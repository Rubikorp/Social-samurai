import React from 'react';
import styles from './Users.module.css';
import Preloaded from "../Preolader/Preloader";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({totalUserCount, pageSize,currentPage,onPageChanged, isFetching, users, followProgress, unfollowUser, followUser}) => {
	return (
		<div className={"container bg " + styles.container__users}>
			{isFetching ? <Preloaded /> : ''}
			{users.map(u => <User
				user={u}
				followProgress={followProgress}
				unfollowUser={unfollowUser}
				followUser={followUser}
			/>)}
			<Paginator
				currentPage={currentPage}
				totalUserCount={totalUserCount}
				onPageChanged={onPageChanged}
				pageSize={pageSize}
			/>
		</div>
	)
}


export default Users