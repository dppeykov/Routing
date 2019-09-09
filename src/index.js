import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import App from "./components/App";
import Users from "./components/Users";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

import "./styles.css";

const routing = (
  <Router>
    <div>
      {
        // The navigation can be in different component - for bigger apps
      }

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {
        // The switch allows to render only the matches - the rest is falling back to NotFound
      }

      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
