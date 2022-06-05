import React from "react";
import styles from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	}

	activateEditMode = () => {
		this.setState({
			editMode:true,
		})
	}
	deactivateEditMode = () => {
		this.setState({
			editMode:false
		});
		this.props.updateStatus(this.state.status)
	}

	onChangeLocalStatus= (e) => {
		this.setState({
			status: e.currentTarget.value
		})
	}

	componentDidUpdate(prevProps,prevState) {
		if(prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}

	render() {
		return (
			<>
				{!this.state.editMode &&
				<div>
					<span className={styles.status}
					     onDoubleClick={this.activateEditMode}>
						{this.props.status !== null && this.props.status !== ""
							? this.props.status
							: 'status'}
					</span>
				</div>
				}
				{this.state.editMode &&
				<div>
					<input
						className={styles.edit_mode}
						autoFocus={true}
						onBlur={this.deactivateEditMode}
						value={this.state.status}
						onChange={(e)=>this.onChangeLocalStatus(e)}
					/>
				</div>
				}
			</>
		)
	}
}

export default ProfileStatus