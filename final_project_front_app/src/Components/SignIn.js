import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import LogInHandler from "./LogInHandler";
export default class SignIn extends Component {
  constructor(props) {
    super();
    this.state = { username: "", password: "" };
  }

  render() {
    const url = `${process.env.REACT_APP_APILINK}login`;

    return (
      <div className="signInForm">
        <h4>sign in here</h4>
        <form onSubmit={this.props.handleSignIn}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            onChange={this.props.handleInput}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            onChange={this.props.handleInput}
          ></input>

          <button
            value="Submit"
            type="submit"
            onClick={this.props.handleSignIn}
          >
            log in
          </button>
        </form>
        {localStorage.getItem("jwt") ? <Redirect to="/" /> : null}
        <a href="/signup">New User? Sign up here!</a>
      </div>
    );
  }
}
