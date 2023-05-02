import { useReducer } from "react"
import { createContext } from "react"
import { UserContextType } from "../interfaces/UserInterfaces"
import userReducer from "../reducers/user"

const UserContext = createContext<UserContextType>({
  users: [],
  user: {},
  repos: [],
  loading: false,
  dispatch: () => {}
})

const initialState = {
  users: [],
  user: {},
  repos: [],
  loading: false
}

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialState)

  return <UserContext.Provider value={{ users: state.users, loading: state.loading, user: state.user, repos: state.repos, dispatch }}>{children}</UserContext.Provider>
}

export default UserContext
