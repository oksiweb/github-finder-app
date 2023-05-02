import { AlertAction, AlertState } from "../interfaces/AlertInterfaces"

import { SET_ALERT, CLEAR_ALERT } from "../actions/types"

const alertReducer = (state: AlertState, action: AlertAction): AlertState => {
     const initialState: AlertState = { msg: "", type: "" }
  switch (action.type) {
    case SET_ALERT:
      return action.payload
    case CLEAR_ALERT:
      return initialState
    default:
      return state
  }
}

export default alertReducer
