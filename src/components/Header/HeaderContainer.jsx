import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuth()
  }

  render() {
    return <Header {...this.props}/>;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  username: state.auth.login,
  myId: state.auth.userId
})

export default connect (mapStateToProps, {
  getAuth
})(HeaderContainer)