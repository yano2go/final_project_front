import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route  } from 'react-router-dom'
import Upload from './Components/Upload'
import Homepage from './Components/Homepage'
import Cooking from './Components/Cooking'
import DIY from './Components/DIY'
import Programming from './Components/Programming'
import ArtsandCrafts from './Components/ArtsandCrafts'

function App() {
  return (
    <div>
      
      <Router>
      
        <Route path="/">
            <Homepage />
          </Route>
        <Route path="/upload">
            <Upload />
            </Route>
          <Route path="/cooking">
            <Cooking />
            {/* this will be: <Gifs category="cooking" />*/}
          </Route>
          <Route path="/diy">
            <DIY />
          </Route>
          <Route path="/artsandcrafts">
            <ArtsandCrafts />
          </Route>
          <Route path="/programming">
            <Programming />
          </Route>
        {/* put a Navbar component here*/}
        
      </Router>
      
    </div>
    
  );
}

export default App;
