import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Upload from "./Components/Upload";
import Homepage from "./Components/homepage";
import Categories from "./Components/Categories";
import NavBar from "./Components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Switch from "react-bootstrap/esm/Switch";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Show from "./Components/Show";
import GifSearch from "./Components/GifSearch";
import LogInHandler from "./Components/LogInHandler";
import Profilepage from "./Components/Profilepage";

function App(props) {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("jwt"));
  console.log("app refreshed", isLoggedIn, props);

  const handleLogOut = (event) => {
    event.preventDefault();
    setIsLoggedIn(false);
    localStorage.clear();
    console.log(isLoggedIn);
  };

  const handleInput = (event) => {
    event.preventDefault();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_APILINK}users`, {
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
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogIn = async (event) => {
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
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fullSite">
      <NavBar isLoggedIn={isLoggedIn} logout={handleLogOut} />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/upload" exact component={Upload} />
        <Route path="/cooking" exact component={Categories} />
        <Route path="/diy" exact component={Categories} />
        <Route path="/artsandcrafts" exact component={Categories} />
        <Route path="/programming" component={Categories} />
        <Route path="/profilepage" component={Profilepage} />
        <Route path="/random" component={Categories} />
        <Route path="/show" exact component={Show} />
        <Route path="/gifsearch" exact component={GifSearch} />
        <Route path="/signup">
          <SignUp handleSignUp={handleSignUp} handleInput={handleInput} />
        </Route>
        <Route path="/signin">
          <SignIn handleSignIn={handleLogIn} handleInput={handleInput} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
