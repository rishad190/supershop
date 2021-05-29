<<<<<<< HEAD
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
=======
import React from "react";
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Home from './component/Home/Home';
import ProductDetail from "./component/Home/ProductContainer/ProductDetail/ProductDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/productDetails/:idTeam">
          <ProductDetail />
        </Route>
      </Switch>
    </Router >
>>>>>>> main
  );
}

export default App;
