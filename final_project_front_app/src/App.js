import React, { useEffect, useState } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Upload from "./Components/Upload";
import Homepage from "./Components/Homepage";
import Categories from "./Components/Categories";
import NavBar from "./Components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "react-bootstrap/esm/Switch";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Show from "./Components/Show";

function App() {
  const [state, setState] = useState({
    username: "",
    password: "",
    isLoggedIn: false,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const handleLogOut = () => {};

  const handleInput = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSignUp = (event) => {};

  const handleLogIn = (event) => {};
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/upload" exact component={Upload} />
        <Route path="/cooking" exact component={Categories} />
        <Route path="/diy" exact component={Categories} />
        <Route path="/artsandcrafts" exact component={Categories} />
        <Route path="/programming" component={Categories} />
        <Route path="/random" component={Categories} />
        <Route path="/show" exact component={Show} />
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
