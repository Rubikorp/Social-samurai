import React from "react";

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

	render() {
		return (
			<>
				{!this.state.editMode &&
				<div>
					<h1 onDoubleClick={this.activateEditMode}>
						{this.props.status !== null ? this.props.status : 'status'}
					</h1>
				</div>
				}
				{this.state.editMode &&
				<div>
					<input
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