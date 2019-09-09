import React, { Component } from "react";

export default class Users extends Component {
  render() {
    console.log("Passing as props from the Route component:", this.props);
    console.log("The match object:", this.props.match);
    console.log("The params object:", this.props.match.params);
    console.log("The ID passed in the URL:", this.props.match.params.id);

    const { params } = this.props.match;

    return (
      <div>
        <h1>Users</h1>
        {params.id ? <p>User ID: {params.id} </p> : null}
      </div>
    );
  }
}
