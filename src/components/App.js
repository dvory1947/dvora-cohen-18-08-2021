import React, { useEffect } from 'react';
import Home from './home';
import Favorites from './favorites';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="container-app">
        <div div className="topper">
          <span>Herolo Weather Task</span>
          <div className="navgation">
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
          </div>
        </div>
        <Switch>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App;