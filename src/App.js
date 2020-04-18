import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Statistics from './page/statistics/statistics';
import Navbar from './component/navbar'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Statistics} />
          <Route path="/needtoknow"  />
          <Route path="/advice" />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
