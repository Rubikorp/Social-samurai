import React from 'react';
import {connect} from 'react-redux';
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers, toogleFollowingProgress,
  toogleIsFetching,
  unFollow
} from "../../Redux/users-reducer";
import Users from './Users';
import Preloaded from './Preloader';
import {userAPI} from "../../api/api";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toogleIsFetching(true)

        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                  this.props.setUsers(data.items)
                  this.props.setTotalUsersCount(data.totalCount)
                  this.props.toogleIsFetching(false)
              });
    }

    onPageChanged = (pageNumber) => {
        this.props.toogleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
              this.props.setUsers(data.items)
              this.props.toogleIsFetching(false)
          });
    }

    unfollowUser = (userId) => {
      this.props.toogleFollowingProgress(true, userId)
      userAPI.deleteFollowUser(userId).then(data => {
        if(data.resultCode === 0) {
          this.props.unFollow(userId)
        }
        this.props.toogleFollowingProgress(false, userId)
      })
    }

    followUser = (userId) => {
      this.props.toogleFollowingProgress(true, userId)
      userAPI.postFollowUser(userId).then(data => {
        if(data.resultCode === 0) {
          this.props.follow(userId)
        }
        this.props.toogleFollowingProgress(false, userId)
      })
    }


    render() {
        return (
          <>
              {this.props.isFetching
                ? <Preloaded />
                : ''}
              <Users {...this.props}
                onPageChanged={this.onPageChanged}
                unFollow={this.unfollowUser}
                follow={this.followUser}
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
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toogleIsFetching,
    toogleFollowingProgress})(UsersAPIComponent);