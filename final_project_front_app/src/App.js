import React from 'react';
import './App.css';
import {  Route  } from 'react-router-dom'
import Upload from './Components/Upload'
import Homepage from './Components/Homepage'
import Categories from './Components/Categories'
import NavBar from "./Components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
        <Route path="/" exact component={Homepage} />
        <Route path="/upload" exact component={Upload}/>
        <Route path="/cooking" exact component={Categories} />
        <Route path="/diy" exact component={Categories} />
        <Route path="/artsandcrafts" exact component={Categories} />
        <Route path="/programming" component={Categories}/>
    </div>
    
  );
}

export default App;
