import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

export default class Users extends Component {
  render() {
    const User = ({ match }) => {
      console.log("Match object from the User:", match);
      return <p>Rendering User {match.params.id}</p>;
    };

    // console.log("Passing as props from the Route component:", this.props);
    console.log("Match object form Users:", this.props.match);
    // console.log("The params object:", this.props.match.params);
    // console.log("The ID passed in the URL:", this.props.match.params.id);
    // console.log(User);

    return (
      <div>
        <h1>Users</h1>
        <strong>select a user</strong>
        <ul>
          <li>
            <Link to="/users/1">User 1 </Link>
          </li>
          <li>
            <Link to="/users/2">User 2 </Link>
          </li>
          <li>
            <Link to="/users/3">User 3 </Link>
          </li>
        </ul>
        {
          // This is taking the User function as a new component and renders it
        }
        <Route path="/users/:id" component={User} />
      </div>
    );
  }
}
