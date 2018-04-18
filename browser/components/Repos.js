import React from 'react'
import {fetchReposThunk} from '../redux/actions'
import {connect} from 'react-redux'

class Repos extends React.Component {

  componentDidMount() {
    this.props.fetchReposThunk(1)
  }

  render() {
    return (
      <div>
        <h1>My Repositories</h1>
        <div>
          {this.props.repos.length && this.props.repos.map(repo => (<a href={repo.url}>{repo.url}</a>))}
        </div>
      </div>
    )
  }
}

const mapDispatch = {fetchReposThunk}
const mapState = (state) => ({
  repos: state.currentRepos
})

export default connect(mapState, mapDispatch)(Repos)
