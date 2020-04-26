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
import Navbar from './component/navbar';
import Advice from './page/advice/advice';
import NeedtoKnow from './page/needtoknow/needtoknow';
import WorldMap from './page/map/map';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Statistics} />
          <Route path="/needtoknow" component={NeedtoKnow} />
          <Route path="/advice" component={Advice} />
          <Route path="/map" component={WorldMap} />
        </Switch>
      </div>
      <footer>
        <span>Hong Minh Thang - HCMUS K18</span>
        <span>A project in Covid-19 pandemic</span>
      </footer>
    </Router>
  );
}

export default App;
