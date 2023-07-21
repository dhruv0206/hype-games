import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home/home";
import Login from "../Login/login";
import Signup from "../SingUp/SignUp";
import PrivateRoute from "./protectedRoutes";

const MainRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        {/* <Route path='/' exact element={Login} /> */}
        <Route path="/login" exact component={Login} />
        <Route path="/sign-up" exact component={Signup} />
        {/* <Route path="/home" exact component={Home} /> */}
      </Switch>
    </Router>
  );
};

export default MainRoutes;
