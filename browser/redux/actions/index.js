import axios from 'axios'

export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const SET_CURRENT_REPOS = 'FETCH_REPOS'


const setCurrentUser = (currentUser) => ({
  type: SET_CURRENT_USER,
  currentUser
})

const setCurrentRepos = (currentRepos) => ({
  type: SET_CURRENT_REPOS,
  currentRepos
})

export const fetchReposThunk = (userId) => dispatch => {
  axios.get(`/api/users/${userId}/repos`)
    .then(res => {
      dispatch(setCurrentRepos(res.data))
    })
    .catch(err => {
      console.error(err)
    })
}

export const handleLoginThunk = user => dispatch => {
  axios.post('/api/auth/local', user)
    .then(res => {
      dispatch(setCurrentUser(res.data))
    })
    .catch(err => {
      alert('Invalid Username or Password')
      console.error(err)
    })
}
