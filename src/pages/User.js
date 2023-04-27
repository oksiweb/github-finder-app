import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa"
import { useEffect, useContext } from "react"
import { useParams, Link } from "react-router-dom"
import Spinner from "../components/layout/Spinner"
import RepoList from "../components/repos/RepoList"
import GithubContext from "../context/github/GithubContext"
import { getUserAndRepos } from "../context/github/GithubActions"

function User() {
  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back To Search
          </Link>
        </div>
      </div>
    </>
  )
}

export default User
