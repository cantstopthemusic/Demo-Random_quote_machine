import { connect } from "react-redux";
import NewQuote from "../components/NewQuote";
import { newQuote } from "../reducers/QuoteReducer";

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateQuote: (num) => {
      dispatch(newQuote(num));
    },
  };
};
const mapStateToProps = (state) => {
  return { index: state };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewQuote);
