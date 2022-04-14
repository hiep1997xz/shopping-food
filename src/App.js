import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
