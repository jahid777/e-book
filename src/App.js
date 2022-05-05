import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddBook from "./Components/AddData/AddBook";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminPage from "./Components/Admin/AdminPage";
import AdminPrivateRoute from "./Components/AdminPrivateRoute/AdminPrivateRoute";
import BookDisplay from "./Components/Display/BookDisplay";
import ViewPdf from "./Components/Display/ViewPdf";
import BannerEditDisplaybook from "./Components/EditData/BannerEditDisplaybook";
import Booklist from "./Components/EditData/BookList";
import FrontPageEdit from "./Components/EditData/FrontPageEdit";
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

        <PrivateRoute path="/frontPageEdit">
          <FrontPageEdit />
        </PrivateRoute>

        <PrivateRoute path="/bannerEditDisplaybook">
          <BannerEditDisplaybook />
        </PrivateRoute>

        <Route path="/books">
          <BookDisplay />
        </Route>

        <Route path="/viewPdf/:bookId">
          <ViewPdf />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
