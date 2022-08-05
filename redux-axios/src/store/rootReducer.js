const initialState = {
  dogData: {
    a1: "text1",
    a2: "text2",
    a3: "text3",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DOG_DATA":
      let copy = [...state];
      copy.push(action.payload);
      return copy;
    default:
      return state;
  }
};

export default rootReducer;
