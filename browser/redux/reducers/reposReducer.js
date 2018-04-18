import {SET_CURRENT_REPOS} from '../actions'

export default function (state = [], action) {
  switch (action.type) {
    case SET_CURRENT_REPOS:
      return action.currentRepos
    default:
      return state
  }
}
