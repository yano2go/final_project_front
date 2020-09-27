import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route  } from 'react-router-dom'
import Upload from './Components/Upload'
import Homepage from './Components/Homepage'
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
            <Categories category="cooking" />
          </Route>
          <Route path="/diy">
           
            <Categories category="diy" />
          </Route>
          <Route path="/artsandcrafts">
            
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
