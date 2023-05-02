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

export interface UserProfile {}

export interface UserState {
  users: User[]
  user: UserProfile
  repos: string[]
  loading: boolean
}

export interface UserAction {
  type: string
  payload?: any
}

export type UserContextType = {
  users: User[]
  user: UserProfile
  repos?: string[]
  loading: boolean
  dispatch: (action: UserAction) => void
}
