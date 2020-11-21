import React from 'react'
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./pages/home/index";
import Cart from "./pages/cart/index";
import Account from "./pages/account/index";
import User from "./pages/user/index";
function Main(props) {
  console.log(props);
  return (
    <section id="section">

      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
    </section>
  )
}

export default Main
