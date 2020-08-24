import { connect } from "react-redux";
import NewQuote from "../components/NewQuote";
import { newQuote } from "../reducers/QuoteReducer";

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateQuote: (num) => {
      // dispatch({ type: "NEW_QUOTE", index: num });
      dispatch(newQuote(num));
    },
  };
};

export default connect(null, mapDispatchToProps)(NewQuote);
