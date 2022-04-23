import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Qr from "./Components/Qr/Qr";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Qr />
        </Route>

        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
