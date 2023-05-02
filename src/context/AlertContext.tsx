import { useReducer } from "react"
import { createContext } from "react"
import { SET_ALERT, CLEAR_ALERT } from "../actions/types"
import { AlertState } from "../interfaces/AlertInterfaces"

import alertReducer from "../reducers/alert"

interface IAlertContext {
  alert: AlertState
  setAlert: (msg: string, type: string) => void
}

const AlertContext = createContext<IAlertContext | null>(null)

const initialState: AlertState = { msg: "", type: "" }

export const AlertContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(alertReducer, initialState)

  const setAlert = (msg: string, type: string) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } })
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT, payload: { msg: "", type: "" } })
    }, 3000)
  }

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert: setAlert
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContext
