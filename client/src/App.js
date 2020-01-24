import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AuthDataProvider from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./containers/Landing/Landing";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./containers/Home/Home";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

export default function App() {
  return (
    <Router>
      <AuthDataProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={LoginForm}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/register" component={RegisterForm}></Route>
        </Switch>
      </AuthDataProvider>
    </Router>
  );
}
