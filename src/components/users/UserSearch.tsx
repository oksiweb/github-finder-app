import { useState, useContext, useCallback } from "react"
import UserContext from "../../context/UserContext"
import { UserResultsProps } from "../../interfaces/UserInterfaces"
import { searchUsers } from "../../actions/UserActions"
import { GET_USERS, LOADING, CLEAR_USERS } from "../../actions/types"
import AlertContext from "../../context/AlertContext"
import { debounce } from "../../utils/helpers"

function UserSearch() {
  const { users, loading, dispatch }: UserResultsProps = useContext(UserContext)
  const alertContext = useContext(AlertContext)
  const [text, setText] = useState<string>("")

  const delayedSearchUsers = useCallback(
    debounce(async (searchText: string) => {
      dispatch({ type: LOADING })
      const users = await searchUsers(searchText)
      dispatch({ type: GET_USERS, payload: users })
    }, 500),
    []
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (text === "") {
      alertContext?.setAlert("enter some text", "error")
    } else {
      delayedSearchUsers(text)
    }
  }

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value
    setText(searchQuery)
    if (searchQuery === "") {
      alertContext?.setAlert("enter some text", "error")
    } else {
      delayedSearchUsers(searchQuery)
    }
  }

  const handleClearSearch = () => {
    setText("")
    dispatch({ type: CLEAR_USERS })
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input type="text" value={text} onChange={handleChange} className="w-full pr-40 bg-gray-200 input input-lg text-black" placeholder="Search" />
              <button type="submit" disabled={loading} className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={handleClearSearch} className="btn btn-ghost btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default UserSearch
