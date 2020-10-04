import React from "react";
export default async (event, setState, state) => {
  event.preventDefault();
  try {
    const response = await fetch(`${process.env.REACT_APP_APILINK}login`, {
      body: JSON.stringify(state),
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

    setState({
      username: "",
      password: "",
    });
  } catch (error) {
    console.error(error);
  }
};
