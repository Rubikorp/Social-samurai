import React from "react";
import styles from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
	state = {
		editMode: false
	}

	activateEditMode = () => {
		this.setState({
			editMode:true
		})
	}
	deactivateEditMode = () => {
		this.setState({
			editMode:false
		})
	}

	render() {
		return (
			<>
				{!this.state.editMode &&
				<div>
					<h1 onDoubleClick={this.activateEditMode}>
						{this.props.status}
					</h1>
				</div>
				}
				{this.state.editMode &&
				<div>
					<input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
				</div>
				}
			</>
		)
	}
}

export default ProfileStatus