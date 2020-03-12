import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";

import "./App.scss";

export default class App extends Component {
    
  componentDidMount() {
	  store.dispatch(loadUser());
	};

  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route name="register" path="/register" component={Register}/>
          <Route name="login" path="login" component={Login}/>
          <Route name="dashboard" path="/dashboard" component={Dashboard}/>
          <Route name="maps" path="/maps" component={Maps}/>
          <Route name="checkout" path="/checkout" component={Checkout}/>
          <Route name="session" path="/sessions" component={Session}/>
          <Route name="history" path="/history" component={History} />
          <Route name="home" exact path="/" component={Home}/>
          <Route name="notFound" path="*" component={NotFound}/>
        </Switch>
      </Provider>
    );
  };
};
