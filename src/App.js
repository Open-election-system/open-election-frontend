import './App.scss'

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import HomePage from './components/pages/HomePage/HomePage';
import AdminPanel from './components/pages/AdminPanel/AdminPanel';
import ElectionsPage from "./components/pages/ElectionsPage/ElectionsPage";
import {ADMIN,ELECTIONS, HOME} from "./constants/Routes";

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
              <Route exact path={ADMIN} component={AdminPanel}/>
            </Switch>
          </Router>
        </div>
    );
  }
}
