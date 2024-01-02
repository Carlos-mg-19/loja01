import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Store from "./pages/Store"

const Content = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component= {Store} />
      </Switch>
    </Router>
  )
}

export default Content;