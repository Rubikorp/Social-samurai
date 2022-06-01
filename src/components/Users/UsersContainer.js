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
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(
          currentPage, pageSize
        )
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
      this.props.requestUsers(
        pageNumber, pageSize
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

let mapStateToProps = (state) => {
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

