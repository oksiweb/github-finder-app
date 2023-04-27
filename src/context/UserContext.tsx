import { useReducer } from "react"
import { createContext } from "react"
import { UserContextType } from "../interfaces/UserInterfaces"
import userReducer from "../reducers/user"

const UserContext = createContext<UserContextType>({
  users: [],
  loading: false,
  dispatch: () => {}
})

const initialState = {
  users: [],
  loading: false
}

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialState)

  return <UserContext.Provider value={{ users: state.users, loading: state.loading, dispatch }}>{children}</UserContext.Provider>
}

export default UserContext
