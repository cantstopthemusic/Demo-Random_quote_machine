import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NewQuote extends Component {
  static propTypes = {
    onUpdateQuote: PropTypes.func,
  };
  handleNewQuote(num) {
    if (this.props.onUpdateQuote) {
      this.props.onUpdateQuote(num);
    }
  }
  render() {
    return (
      <div id="new-quote">
        <button onClick={this.handleNewQuote.bind(this, 15)}>
          new quote set to 15
        </button>
      </div>
    );
  }
}
