import React from 'react';
import {connect} from 'react-redux';
import {
  followUser, requestUsers,
  unfollowUser
} from "../../Redux/users-reducer";
import Users from './Users';
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers,
} from "../../Redux/users-selectors";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.requestUsers(
          this.props.currentPage, this.props.pageSize
        )
    }

    onPageChanged = (pageNumber) => {
      this.props.requestUsers(
        pageNumber, this.props.pageSize
      )
    }


    render() {
        console.log('renderUser')
        return (
          <>
              <Users {...this.props}
                onPageChanged={this.onPageChanged}
              />
          </>
        )
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUserCount: state.usersPage.totalUserCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state) => {
    console.log("mapStateToProps")
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followProgress: getFollowingInProgress(state)
    }
}

export default compose(
  connect(mapStateToProps, {
    followUser,
    unfollowUser,
    requestUsers})
)(UsersAPIComponent)

