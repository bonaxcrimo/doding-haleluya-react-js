import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Dodings from './components/Dodings';
import DetailDoding from './components/DetailDoding';
function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Dodings}/>
        <Route exact path='/detail/:no' component={DetailDoding}/>
      </div>
    </Router>
  );
}

export default App;
