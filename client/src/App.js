import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AuthDataProvider from "./components/Auth/Auth";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./containers/Home/Home";
import LoginForm from "./components/LoginForm/LoginForm";

export default function App() {
  return (
    <Router>
      <AuthDataProvider>
        <Switch>
          <Route path="/login" component={LoginForm}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </AuthDataProvider>
    </Router>
  );
}
