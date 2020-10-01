import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super();
    this.state = { username: "", password: "" };
  }

  render() {
    const url = `${process.env.REACT_APP_APILINK}/users`;
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch(`${process.env.REACT_APP_APILINK}/users`, {
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
      <div className="signUpForm">
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
