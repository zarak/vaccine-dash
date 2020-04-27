const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVITY":
      return {
        ...state,
        selectedIndex: action.payload
      };
    case "SET_AXES":
      return {
        ...state,
        axes: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
