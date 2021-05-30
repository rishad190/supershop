import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CartHome from "./component/Cart/CartHome/CartHome";
import Home from "./component/Home/Home";
import ProductDetail from "./component/Home/ProductContainer/ProductDetail/ProductDetail";
import Shipment from "./component/Shipment/Shipment";
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import PrivateRoute from "./auth/PrivateRoute";
import Login from "./auth/Login";

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [token, setToken] = useState(null);
  useEffect(() => {
    const store = sessionStorage.getItem('token');
    if (store) {
      setToken(store)
    }
    const USER = JSON.parse(sessionStorage.getItem('user'));
    if (USER) {
      setLoggedInUser(USER)
    }
  }, [])
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, token, setToken]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/cart">
          <CartHome />
        </Route>
        <Route path="/productDetails/:idTeam">
          <ProductDetail />
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <PrivateRoute path="/shipment">
          <Shipment />
        </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
