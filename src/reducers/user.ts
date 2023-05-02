import { GET_USERS, LOADING, CLEAR_USERS, GET_USER_AND_REPOS } from "../actions/types"
import { UserAction, UserState } from "../interfaces/UserInterfaces"

const userReducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload }
    case LOADING:
      return { ...state, loading: action.payload }
    case GET_USER_AND_REPOS:
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false
      }
    case CLEAR_USERS:
      return { ...state, users: [] }
    default:
      return state
  }
}

export default userReducer
