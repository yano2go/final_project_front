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
import Categories from './Components/Categories'

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
            <Categories category="cooking" />
          </Route>
          <Route path="/diy">
            <DIY />
            <Categories category="diy" />
          </Route>
          <Route path="/artsandcrafts">
            <ArtsandCrafts />
            <Categories category="ArtsandCraft" />
          </Route>
          <Route path="/programming">
          <Categories category="programming" />
          </Route>
        {/* put a Navbar component here*/}
        
      </Router>
      
    </div>
    
  );
}

export default App;
