import React, { Component } from "react";

export default class Text extends Component {
  render() {
    return (
      <div className="content">
        <p className="quote">{this.props.text}</p>
        <p className="author">——{this.props.author}</p>
      </div>
    );
  }
}
