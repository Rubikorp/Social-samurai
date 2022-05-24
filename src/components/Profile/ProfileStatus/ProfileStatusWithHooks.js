import React, {useEffect, useState} from "react";
import styles from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = (props) => {

	// hook
	let [editMode, setEditMode] = useState(false)
	let [status, setStatus] = useState(props.status)

	useEffect(() => {
		setStatus(props.status)
	},[props.status])

	const activateEditMode = () => {setEditMode( true);}
	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	}
	const onChangeLocalStatus= (e) => {setStatus(e.currentTarget.value)}



	return (
		<>
			{!editMode &&
				<div>
					<div
						onDoubleClick={activateEditMode}
						className={styles.status}>
						{props.status !== null && props.status !== ""
							? props.status
							: 'status'}
					</div>
				</div>
			}

			{editMode &&
			<div>
				<input
					className={styles.edit_mode}
					autoFocus={true}
					onBlur={deactivateEditMode}
					value={status}
					onChange={onChangeLocalStatus}
				/>
			</div>
			}
		</>
	)
}

export default ProfileStatusWithHooks