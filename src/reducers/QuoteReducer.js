//action types
const NEW_QUOTE = "NEW_QUOTE";
//reducer
export default function (state, action) {
  if (!state) {
    state = { index: 0 };
  }
  switch (action.type) {
    case NEW_QUOTE:
      return { index: action.index };
    default:
      return state;
  }
}
//action creator
export const newQuote = (num) => {
  return { type: NEW_QUOTE, index: num };
};
