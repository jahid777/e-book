import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddBook from "./Components/AddBook/AddBook";
import Home from "./Components/Home/Home";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import TermsCondition from "./Components/TermsCondition/TermsCondition";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <PrivateRoute path="/termsCondition">
          <TermsCondition />
        </PrivateRoute>

        <PrivateRoute path="/addBook">
          <AddBook />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
