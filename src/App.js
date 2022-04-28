import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddBook from "./Components/AddData/AddBook";
import AdminLogin from "./Components/Admin/AdminLogin";
import TermsConditionEdit from "./Components/EditData/TermsConditionEdit";

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
        TermsConditionEdit
        <Route path="/termsConditionEdit">
          <TermsConditionEdit />
        </Route>
        <Route path="/adminLogin">
          <AdminLogin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
