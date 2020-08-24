import { connect } from "react-redux";
import Header from "../components/Text";

const mapStateToProps = (state) => {
  return {
    index: state.index,
  };
};
export default connect(mapStateToProps)(Header);
