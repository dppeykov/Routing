import React from "react";

class Contact extends React.Component {
  // the history object has a push that allows to change the path once submitted
  onSubmit = () => {
    console.log("Contact component props:", this.props);
    this.props.history.push("/");
  };

  render() {
    return (
      <form>
        <input placeholder="name" type="name" />
        <input placeholder="email" type="email" />
        <button onClick={this.onSubmit}>Submit</button>
      </form>
    );
  }
}
export default Contact;
