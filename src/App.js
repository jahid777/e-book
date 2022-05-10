import { Divider } from "@material-ui/core";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminPrivateRoute from "./Components/AdminPrivateRoute/AdminPrivateRoute";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import loading from "./images/Loading.gif";

const Home = React.lazy(() => import("./Components/Home/Home.js"));
const TermsCondition = React.lazy(() =>
  import("./Components/TermsCondition/TermsCondition")
);
const AddBook = React.lazy(() => import("./Components/AddData/AddBook"));
const TermsConditionEdit = React.lazy(() =>
  import("./Components/EditData/TermsConditionEdit")
);
const AdminLogin = React.lazy(() => import("./Components/Admin/AdminLogin"));
const AdminPage = React.lazy(() => import("./Components/Admin/AdminPage"));
const BooklistEdit = React.lazy(() =>
  import("./Components/EditData/BookListEdit")
);
const FrontPageEdit = React.lazy(() =>
  import("./Components/EditData/FrontPageEdit")
);
const BannerEditDisplaybook = React.lazy(() =>
  import("./Components/EditData/BannerEditDisplaybook")
);
const BookDisplay = React.lazy(() =>
  import("./Components/Display/BookDisplay")
);
const ViewPdf = React.lazy(() => import("./Components/Display/ViewPdf"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="loader">
            <img src={loading} alt="Loading......" />
          </div>
        }
      >
        <Switch>
          <Route exact component={Home} path="/" />

          <PrivateRoute component={TermsCondition} path="/termsCondition" />

          <AdminPrivateRoute component={AddBook} path="/addBook" />

          <AdminPrivateRoute
            component={TermsConditionEdit}
            path="/termsConditionEdit"
          />

          <Route component={AdminLogin} path="/adminLogin" />

          <AdminPrivateRoute component={AdminPage} path="/dashboard" />

          <AdminPrivateRoute component={BooklistEdit} path="/bookListEdit" />

          <AdminPrivateRoute component={FrontPageEdit} path="/frontPageEdit" />

          <AdminPrivateRoute
            component={BannerEditDisplaybook}
            path="/bannerEditDisplaybook"
          />

          <PrivateRoute component={BookDisplay} path="/books" />

          <PrivateRoute component={ViewPdf} path="/viewPdf/:bookId" />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
