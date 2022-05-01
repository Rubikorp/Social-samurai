const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
  users: [
    {
      id:1,
      photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2_%2808-04-2022%29.jpg/220px-%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2_%2808-04-2022%29.jpg',
      followed: false,
      fullName:'Ruslan',
      status: 'I am a boss',
      location: {
        city: 'Sterlitamak',
        country: 'Russian Federation'
      }
    },
    {
      id:2,
      photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2_%2808-04-2022%29.jpg/220px-%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2_%2808-04-2022%29.jpg',
      followed: false,
      fullName:'Elina',
      status: 'I am a boss',
      location: {
        city: 'Sterlitamak',
        country: 'Russian Federation'
      }
    },
    {
      id:3,
      photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2_%2808-04-2022%29.jpg/220px-%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2_%2808-04-2022%29.jpg',
      followed: true,
      fullName:'Victor',
      status: 'I am a boss',
      location: {
        city: 'Moscow',
        country: 'Russian Federation'
      }
    },
    {
      id:4,
      photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2_%2808-04-2022%29.jpg/220px-%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2_%2808-04-2022%29.jpg',
      followed: true,
      fullName:'Alexsey',
      status: 'I am a boss',
      location: {
        city: 'Kiev',
        country: 'Ukraina'
      }
    },
    {
      id:5,
      photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2_%2808-04-2022%29.jpg/220px-%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2_%2808-04-2022%29.jpg',
      followed: false,
      fullName:'Salo',
      status: 'I am a boss',
      location: {
        city: 'Minsk',
        country: 'Belarus'
      }
    },

  ],
}

const usersReducer = (state=initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return ({
        ...state,
        //users:[...state.users]
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return {...u, followed: true}
          }
          return u;
        })
      })

    case UNFOLLOW:
      return ({
        ...state,
        //users:[...state.users]
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return {...u, followed: false}
          }
          return u;
        })
      })

    case SET_USERS: {
      return {...state, users: [...state.users, ...action.users]}
    }
    default:
      return state
  }
}

export const followAC = (userID) => ({type: FOLLOW, userID});

export const unFollowAC = (userID) =>({ type: UNFOLLOW, userID})

export const setUsersAC = (users) =>({ type: SET_USERS, users})

export default usersReducer