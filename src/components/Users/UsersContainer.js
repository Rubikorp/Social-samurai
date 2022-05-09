import React from 'react';
import {connect} from 'react-redux';
import {
  followUser, getUser,
  unfollowUser
} from "../../Redux/users-reducer";
import Users from './Users';
import Preloaded from '../Preolader/Preloader';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUser(
          this.props.currentPage, this.props.pageSize
        )
    }

    onPageChanged = (pageNumber) => {
      this.props.getUser(
        pageNumber, this.props.pageSize
      )
    }


    render() {
        return (
          <>
              <Users {...this.props}
                onPageChanged={this.onPageChanged}
              />
          </>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(UsersAPIComponent)

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    followUser,
    unfollowUser,
    getUser})(AuthRedirectComponent);