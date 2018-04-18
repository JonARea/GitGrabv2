import React from 'react'
import fetchRepos from '../redux/actions'

class Repos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: fetchRepos(props.history) || []
    }
  }

  render() {
    return (
      <div>
        <h1>Repositories</h1>
        <div>
          {this.state.repos.map(repo => (
          <a href={repo}>{repo}</a>))}
        </div>
      </div>
    )
  }
}

export default Repos
