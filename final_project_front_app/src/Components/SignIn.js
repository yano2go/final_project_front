import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
export default class SignIn extends Component {
  constructor(props) {
    super();
    this.state = { username: "", password: "" };
  }

  render() {
    const url = `${process.env.REACT_APP_APILINK}login`;
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch(`${process.env.REACT_APP_APILINK}login`, {
          body: JSON.stringify(this.state),
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        console.log(data);
        localStorage.setItem("jwt", data.token);
        localStorage.setItem("username", data.user.username);
        this.setState({
          username: "",
          password: "",
        });
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <div className="signInForm">
        <h4>sign in here</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">username</label>
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

          <button value="Submit" type="submit">
            log in
          </button>
        </form>
        {localStorage.getItem("jwt") ? <Redirect to="/" /> : null}
        <a href="/signup">New User? Sign up here!</a>
      </div>
    );
  }
}
