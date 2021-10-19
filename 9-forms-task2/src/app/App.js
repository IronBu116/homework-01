import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Card from './components/Card.jsx'
import Edit from './components/Edit.jsx'

function App() {
  return (
    <div className="container my-3">
      <div className="row">
        <Switch>
          <Route path="/edit" exact component={Edit} />
          <Route path="/" exact component={Card} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  )
}

export default App
