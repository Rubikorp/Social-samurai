import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../Redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "../../hoc/withRouter"
import {compose} from "redux";


class ProfileContainer extends  React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId
    if (!userId) {
        userId = this.props.myId
    }

    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }


  render() {
    return (
      <Profile
        {...this.props}
      />
    )
  }
}

//state = getState()
let mapStateToProps = (state) => ({
    profile: state.profilePages.profile,
    myId: state.auth.userId,
    loading: state.profilePages.isLoadingProfile,
    status: state.profilePages.status
});

export default compose(
  connect(mapStateToProps, {getUserProfile,getStatus,
    updateStatus,}),
  withRouter,
  withAuthRedirect,

)(ProfileContainer)
