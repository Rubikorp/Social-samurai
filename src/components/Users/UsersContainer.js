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
import * as axios from 'axios';
import Users from './Users';
import Preloaded from './Preloader';

class UsersAPIComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toogleIsFetching(true)
        if (this.props.users.length === 0 ) {
            axios
              .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
                withCredentials: true
              })
              .then(response => {
                  this.props.setUsers(response.data.items)
                  this.props.setTotalUsersCount(response.data.totalCount)
                  this.props.toogleIsFetching(false)
              });
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.toogleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios
          .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{
            withCredentials: true
          })
          .then(response => {
              this.props.setUsers(response.data.items)
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