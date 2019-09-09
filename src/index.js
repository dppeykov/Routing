import React from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

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
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>

      {
        // The switch allows to render only the matches - the rest is falling back to NotFound
      }

      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        {
          // The URL parameters allow rendering the same component but based on it's id
          // Example: Users -> id 1,2,3
        }
        {/* 
        The following has been moved to the Users component in order to implement nested routing
        // <Route path="/users/:id" component={Users} /> 
        */}

        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
