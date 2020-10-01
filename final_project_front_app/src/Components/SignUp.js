import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super();
    this.state = { username: "", password: "" };
  }

  render() {
    const url = "http://localhost:3000/users";
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch("http://localhost:3000/users", {
          body: JSON.stringify(this.state),
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        localStorage.setItem("jwt", data.token);
        this.setState({
          username: "",
          password: "",
        });
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <div classname="signUpForm">
        <h4>sign up here</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">create a username</label>
          <input
            type="text"
            onChange={(event) =>
              this.setState({ ...this.state, username: event.target.value })
            }
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            onChange={(event) =>
              this.setState({ ...this.state, password: event.target.value })
            }
          ></input>
          <input
            value="Submit"
            type="submit"
            onClick={this.props.handleSignUp}
          />
        </form>
      </div>
    );
  }
}
