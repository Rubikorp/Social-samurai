import React from 'react';
import {connect} from 'react-redux';
import {
  followUser, getUser,
  unfollowUser
} from "../../Redux/users-reducer";
import Users from './Users';
import Preloaded from './Preloader';

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
              {this.props.isFetching
                ? <Preloaded />
                : ''}
              <Users {...this.props}
                onPageChanged={this.onPageChanged}
              />
          </>
        )
    }
}

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

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//           dispatch(followAC(userID))
//         },
//         unFollow: (userID) => {
//             dispatch(unFollowAC(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalUserCount) => {
//             dispatch(setTotalUsersCountAC(totalUserCount))
//         },
//         toogleIsFetching: (isFetching) => {
//             dispatch(ToogleIsFetchingAC(isFetching))
//         }
//     }
// }


export default connect(mapStateToProps, {
    followUser,
    unfollowUser,
    getUser})(UsersAPIComponent);