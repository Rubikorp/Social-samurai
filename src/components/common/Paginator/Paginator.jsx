import React from 'react';
import styles from './Paginator.module.css';


const Paginator = ({totalUserCount, pageSize, currentPage, onPageChanged}) => {
	let  pagesCount = Math.ceil(totalUserCount / pageSize);
	let pages = [];
	for (let i=1; i <= pagesCount; i++) {
		pages.push(i)
	}
	return <div>
				{pages.map(p => {
					return (<button
						className={currentPage === p
							? styles.selected_page
							: ''}
						key={p}
						onClick={(e) => {
							onPageChanged(p)
						}}
					>{p}</button>)
				})}
	</div>
}


export default Paginator