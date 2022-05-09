import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "../../hoc/withRouter"


class ProfileContainer extends  React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (this.props.match.params.userId === null || this.props.match.params.userId === '') {
      userId = this.props.myId
    }
    this.props.getUserProfile(userId)
  }


  render() {
    return (
      <Profile
        {...this.props}
      />
    )
  }
}

//HOC
let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

//state = getState()
let mapStateToProps = (state) => ({
    profile: state.profilePages.profile,
    myId: state.auth.userId,
});



export default connect(mapStateToProps, {getUserProfile})(withRouter(AuthRedirectComponent));