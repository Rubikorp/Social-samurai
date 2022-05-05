import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {useParams} from "react-router";


class ProfileContainer extends  React.Component {

  componentDidMount() {
    let userId
    Object.entries(this.props.params).map(p => userId = p[1])
    if (userId === null) {
      userId = 2
    }
    axios
      .get('https://social-network.samuraijs.com/api/1.0/profile/' + userId )
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
      />
    )
  }
}

let mapStateToProps = (state) => ({
    profile: state.profilePages.profile
});

const withRouter = (WrappedComponent: typeof React.Component) => {
  return (props: object) => {
    const params = useParams(); //useParams возвращает объект пары key/value (ключ/значение) параметров URL.
    return (
      <WrappedComponent {...props} params={params}/>
    );
  }
}

export default connect(mapStateToProps, {
  setUserProfile,
})(withRouter(ProfileContainer));