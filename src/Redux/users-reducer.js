import {userAPI} from "../api/api";
import {updateObjectInArray} from "../Utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 8,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

// Dispatch
const usersReducer = (state=initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, "id", {followed: true})
        // users: state.users.map(u => {
        //   if (u.id === action.userID) {
        //     return ({...u, followed: true})
        //   }
        //   return u
        // })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, "id", {followed: false})
        }
    case SET_USERS:
      return ({
        ...state, users: [...action.users]
      })
    case SET_CURRENT_PAGE:
      return  ({
        ...state, currentPage: action.currentPage
      })
    case SET_TOTAL_USER_COUNT:
      return ({
        ...state, totalUserCount: action.totalUserCount
      })
    case TOOGLE_IS_FETCHING:
      return ({
        ...state, isFetching: action.isFetching
      })
    case TOOGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    }
    default:
      return state
  }
}

//ActionCreator
export const followSuccess = (userID) => ({type: FOLLOW, userID});
export const unFollowSuccess = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUserCount) =>
({type:SET_TOTAL_USER_COUNT, totalUserCount});
export const toogleIsFetching = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching});
export const toogleFollowingProgress = (isFetching, userId) =>
  ({type: TOOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


// thunkCreator санки
export const requestUsers =(currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toogleIsFetching(true))

    userAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
      dispatch(toogleIsFetching(false))
      dispatch(setCurrentPage(currentPage))
    });
  }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toogleFollowingProgress(true, userId))

  let response = await apiMethod(userId)
  if(response.resultCode === 0) {
    dispatch(actionCreator(userId))}
  dispatch(toogleFollowingProgress(false, userId))
}

export const followUser = (userId) => async (dispatch) => {
  await followUnfollowFlow(dispatch, userId,userAPI.postFollowUser.bind(userAPI), followSuccess)
}

export const unfollowUser = (userId) => async (dispatch) => {
  await followUnfollowFlow(dispatch, userId,userAPI.deleteFollowUser.bind(userAPI), unFollowSuccess)
}




export default usersReducer