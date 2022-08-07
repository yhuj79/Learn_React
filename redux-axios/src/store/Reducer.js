export const initialState = { completed: null, userId: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TRUE":
      return { ...state, completed: "true" };
    case "DEL_TRUE":
      return { ...state, completed: null };
    case "SET_ONE":
      return { ...state, userId: "1" };
    case "DEL_ONE":
      return { ...state, userId: null };
    default:
      return state;
  }
};
export default reducer;
