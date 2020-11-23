import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "antd-mobile/dist/antd-mobile.css";
import "antd/dist/antd.css";
import { HashRouter as Router } from "react-router-dom";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import products from "./store/products"

//redux 数据
const rootstore = combineReducers({ products });

const store = createStore(rootstore, compose(applyMiddleware(...[thunk]), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
