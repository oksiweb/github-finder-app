export interface Repo {
  id: number
  name: string
  description: string
  html_url: string
  forks: number
  open_issues: number
  watchers_count: number
  stargazers_count: number
}

export interface RepoItemProps {
  repo: Repo
}

export interface RepoListProps {
  repos: Repo[]
}
