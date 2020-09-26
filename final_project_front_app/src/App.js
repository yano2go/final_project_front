import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route  } from 'react-router-dom'

import Upload from './Components/Upload'
import Homepage from './Components/Homepage'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
          <Route path="/cooking">
            <Homepage />{/* this will be: <Gifs category="cooking" />*/}
          </Route>
          <Route path="/diy">
            <Homepage />
          </Route>
          <Route path="/artsandcrafts">
            <Homepage />
          </Route>
          <Route path="/programming">
            <Homepage />
          </Route>
        </Switch>
        {/* put a Navbar component here*/}
      </Router>
    </div>
    
  );
}

export default App;
