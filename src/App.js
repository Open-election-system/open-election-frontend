import './App.scss'

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import HomePage from './components/pages/HomePage/HomePage';
import ElectionsPage from "./components/pages/ElectionsPage/ElectionsPage";
import {ELECTIONS, HOME} from "./constants/Routes";

export default class App extends Component {
  state = {
    isLoggedIn: false
  };

  render() {
    return (
      <div className='app-container'>
          <Router>
            <Switch>
              <Route exact path={HOME} component={HomePage}/>
              <Route exact path={ELECTIONS} component={ElectionsPage}/>
            </Switch>
          </Router>
        </div>
    );
  }
}
