import React from 'react';
import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Modal from "./Components/Modal/Modal"
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/">  
            <Home/>
            </Route>
            <Route path="/dashboard">
              <Dashboard/>
            </Route>
            <Route path="/modal">
              <Modal/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;