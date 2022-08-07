export const initialState = { completed: null, userId: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TRUE_TWO":
      return { ...state, completed: "true", userId: "2" };
    case "SET_FALSE_ONE":
      return { ...state, completed: "false", userId: "1" };
    default:
      return state;
  }
};
export default reducer;
