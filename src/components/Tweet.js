import React, { Component } from "react";

export default class Tweet extends Component {
  handleClickTweet() {
    window.open(
      "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
        encodeURIComponent('"' + this.props.text + '" ' + this.props.author)
    );
  }
  render() {
    return (
      <button className="tweet" onClick={this.handleClickTweet.bind(this)}>
        TWEET
      </button>
    );
  }
}
