const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';

let initialState = {
  users: [],
  pageSize: 8,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
}

const usersReducer = (state=initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return ({
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return ({...u, followed: true})
          }
          return u
        })
      })
    case UNFOLLOW:
      return ({
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return ({...u, followed: false})
          }
          return u
        })
      })
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
    default:
      return state
  }
}

export const follow = (userID) => ({type: FOLLOW, userID});
export const unFollow = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUserCount) =>
({type:SET_TOTAL_USER_COUNT, totalUserCount});
export const toogleIsFetching = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching});

export default usersReducer