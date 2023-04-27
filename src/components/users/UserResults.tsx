import { useContext } from "react"
import UserContext from "../../context/UserContext"
import Spinner from "../layout/Spinner"
import UserItem from "../users/UserItem"
import { User, UserResultsProps } from "../../interfaces/UserInterfaces"

function UserResults() {
  const { users, loading }: UserResultsProps = useContext(UserContext)
  if (!loading && users && users.length > 0) {
    console.log(loading, users)
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map(({ id, login, avatar_url }: User) => (
          <UserItem key={id} user={{ login, avatar_url }} />
        ))}
      </div>
    )
  } else if (loading) {
    return <Spinner />
  } else {
    return null
  }
}

export default UserResults
