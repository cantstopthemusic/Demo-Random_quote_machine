import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Text from "./containers/Text";
import NewQuote from "./containers/NewQuote";
import quotesReducer from "./reducers/QuoteReducer";
import "./index.css";

const store = createStore(quotesReducer);

class Index extends Component {
  render() {
    return (
      <div className="index">
        <Text />
        <NewQuote />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById("root")
);
