import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Text from "./containers/Text";
import NewQuote from "./containers/NewQuote";
import quotesReducer from "./reducers/QuoteReducer";
import Tweet from "./containers/Tweet";
import "./index.css";

const store = createStore(quotesReducer);
class Index extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://use.fontawesome.com/6c9a9c3b14.js";
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return (
      <div className="quote-box">
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis&display=swap"
          rel="stylesheet"
        ></link>
        <Text />
        <NewQuote />
        <Tweet />
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
