import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup";

function App() {
  return (<Router>
    <div className="App">
      <nav className="nav-perant">
        <Link className=" nav-link">Small Marketing</Link>
        <Link className="nav-link " to={"/sign-in"}>About</Link>
        <Link className="nav-link" to={"/sign-in"}>Features</Link>

        <Route>
          <Link className="nav-link1" to={"/sign-in"}>Login</Link>

          <Link className="nav-link1" to={"/sign-up"}>Sign up</Link>
          <Link className="nav-link1" to={"/sign-in"}>Logout</Link>
        </Route>

      </nav>

      <div className="div-login">
        <div className="div-login-parent">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>

        </div>
      </div>
    </div>
  </Router >
  );
}

export default App;