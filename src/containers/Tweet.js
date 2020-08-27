import { connect } from "react-redux";
import Tweet from "../components/Tweet";

const mapStateToProps = (state) => {
  return {
    index: state.index,
    author: state.author,
    text: state.text,
  };
};
export default connect(mapStateToProps)(Tweet);
