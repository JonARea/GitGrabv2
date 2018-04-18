import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Login from './Login'
import Repos from './Repos'

const App = (props) => (

  <BrowserRouter>
    <div>
      <h1>GitGrab</h1>
      <Route path='/login' component={Login} />
      <Route path='/' component={Repos} />
    </div>
  </BrowserRouter>
)

const mapState = (state) => ({reduxState: JSON.stringify(state)})

export default connect(mapState, null)(App)
