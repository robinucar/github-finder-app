import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.js";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About.js";
import "./App.css";

import GitHubState from "./context/github/gitHubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  return (
    <GitHubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GitHubState>
  );
};

export default App;
