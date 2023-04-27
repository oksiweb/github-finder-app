export interface User {
  id?: number
  login?: string
  avatar_url?: string
}

export interface UserItemProps {
  user: User
}

export interface UserResultsProps {
  users: User[]
  loading?: boolean
  dispatch: (action: UserAction) => void
}

export interface UserState {
  users: User[]
  loading: boolean
}

export interface UserAction {
  type: string
  payload?: any
}

export type UserContextType = {
  users: User[]
  loading: boolean
  dispatch: (action: UserAction) => void
}
