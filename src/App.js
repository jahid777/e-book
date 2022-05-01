import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddBook from "./Components/AddData/AddBook";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminPage from "./Components/Admin/AdminPage";
import AdminPrivateRoute from "./Components/AdminPrivateRoute/AdminPrivateRoute";
import BookDisplay from "./Components/Display/BookDisplay";
import Booklist from "./Components/EditData/BookList";
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
        <PrivateRoute path="/termsConditionEdit">
          <TermsConditionEdit />
        </PrivateRoute>
        <Route path="/adminLogin">
          <AdminLogin />
        </Route>
        <AdminPrivateRoute path="/dashboard">
          <AdminPage />
        </AdminPrivateRoute>
        <AdminPrivateRoute path="/book-list">
          <Booklist />
        </AdminPrivateRoute>
        <Route path="/books">
          <BookDisplay />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
