import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profile-reducer";
import {Navigate, useParams} from "react-router";


class ProfileContainer extends  React.Component {

  componentDidMount() {
    let userId
    Object.entries(this.props.params).map(p => userId = p[1])
    if (this.props.params === null || this.props.params === '') {
      userId = this.props.myId
    }
    this.props.getUserProfile(userId)
  }

  render() {
    if (!this.props.isAuth) return <Navigate to={"/login"} />;

    return (
      <Profile
        {...this.props}
      />
    )
  }
}

let mapStateToProps = (state) => ({
    profile: state.profilePages.profile,
    myId: state.auth.userId,
    isAuth: state.auth.isAuth
});

const withRouter = (WrappedComponent: typeof React.Component) => {
  return (props: object) => {
    const params = useParams(); //useParams возвращает объект пары key/value (ключ/значение) параметров URL.
    return (
      <WrappedComponent {...props} params={params}/>
    );
  }
}

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer));