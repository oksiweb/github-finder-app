export type AlertState = {
  msg: string
  type: string
}

export type AlertAction = {
  type: string
  payload: AlertState
}
