import "./App.css";

import Main from "./Main";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/index";
import Cart from "./pages/cart/index";
import Account from "./pages/account/index";
import User from "./pages/user/index";

function App() {
  return (
    <>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Main>
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
        </Main>
      </Switch>
    </>
  );
}

export default App;
