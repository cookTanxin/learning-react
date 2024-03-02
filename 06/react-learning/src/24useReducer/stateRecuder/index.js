function countReducer(state, action) {
  switch (action.type) {
    case "add":
      return { ...state, counter: action.num };
    case "reduce":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

export default countReducer;
