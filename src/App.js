import "./App.css";

import Main from "./Main";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/index";
import Cart from "./pages/cart/index";
import Account from "./pages/account/index";
import User from "./pages/user/index";
import PayCenter from "./pages/account/paycenter";
import GiftApply from "./pages/account/giftapply";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <Switch>
       <Route path="/detail" component={ Detail} />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/account/paycenter">
          <PayCenter />
        </Route>
        <Route path="/account/giftapply">
          <GiftApply />
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
