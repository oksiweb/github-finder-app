import { GET_USERS, LOADING, CLEAR_USERS } from "../actions/types"
import { UserAction, UserState } from "../interfaces/UserInterfaces"

const userReducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload }
    case LOADING:
      return { ...state, loading: action.payload }
    case CLEAR_USERS:
      return { ...state, users: [] }
    default:
      return state
  }
}

export default userReducer
