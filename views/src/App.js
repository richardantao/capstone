import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth/auth";

import "./App.scss";
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'
import Session from './components/pages/Session'
import Home from './components/pages/Home'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'


export default class App extends Component {
    
  componentDidMount() {
	  store.dispatch(loadUser());
	};

  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route name="register" path="/register" component={Register}/>
          <Route name="login" path="/login" component={Login}/>
          <Route name="dashboard" path="/dashboard" component={Dashboard}/>
          <Route name="session" path="/sessions" component={Session}/>
          <Route name="home" exact path="/" component={Home}/>
          <Route name="about" exact path="/about" component={About}/>
          <Route name="notFound" path="*" component={NotFound}/>
        </Switch>
      </Provider>
    );
  };
};
