import {combineReducers} from 'redux'
import currentUser from './userReducer'
import currentRepos from './reposReducer'

export default combineReducers({currentUser, currentRepos})
