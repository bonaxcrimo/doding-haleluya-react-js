import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Dodings from './components/dodings';
function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Dodings}/>
      </div>
    </Router>
  );
}

export default App;
