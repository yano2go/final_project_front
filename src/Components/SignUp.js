import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
export default class SignUp extends Component {
  constructor(props) {
    super();
  }

  render() {
    const url = `${process.env.REACT_APP_APILINK}/users`;

    return (
      <div className="signUpForm">
        <h4>sign up here</h4>
        <form onSubmit={this.props.handleSignUp}>
          <label htmlFor="username">create a username</label>
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
            type="Submit"
            onClick={this.props.handleSignUp}
          >
            Sign Up!
          </button>
        </form>
        {localStorage.getItem("jwt") ? <Redirect to="/" /> : null}
      </div>
    );
  }
}
