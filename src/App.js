import "./App.css";
import NavBottom from "./components/NavBottom";
import SearchTop from "./components/SearchTop";
import Main from "./Main";
import { Switch, Route, withRouter } from "react-router-dom";

function App() {
  return (
    <>
      <SearchTop />
      <Main></Main>
      <NavBottom />
    </>
  );
}

export default withRouter(App);
