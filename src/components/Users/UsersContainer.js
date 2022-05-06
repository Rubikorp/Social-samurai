import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toogleIsFetching,
    unFollow
} from "../../Redux/users-reducer";
import Users from './Users';
import Preloaded from './Preloader';
import {userAPI} from "../../api/api";

class UsersAPIComponent extends React.Component {
    constructor(props) {
        super(props);
    }

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

    render() {
        return (
          <>
              {this.props.isFetching
                ? <Preloaded />
                : ''}
              <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                deleteFollowUser={userAPI.deleteFollowUser}
                postFollowUser={userAPI.postFollowUser}
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
    toogleIsFetching})(UsersAPIComponent);