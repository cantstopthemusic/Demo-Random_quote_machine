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
      <button
        className="getNew"
        onClick={this.handleNewQuote.bind(
          this,
          Math.floor(Math.random() * 102 + 1)
        )}
      >
        New Quote
      </button>
    );
  }
}
