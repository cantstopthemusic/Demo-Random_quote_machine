import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Text extends Component {
  static propTypes = {
    index: PropTypes.number,
  };
  render() {
    return <h1>{this.props.index}</h1>;
  }
}
