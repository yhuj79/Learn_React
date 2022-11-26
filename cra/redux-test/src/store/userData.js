const MODIFY_USERDATA = "userData/MODIFY_USERDATA";
const INIT_USERDATA = "userData/INIT_USERDATA";

export const modifyUserData = (data) => ({ data: data, type: MODIFY_USERDATA });
export const initUserData = () => ({ type: INIT_USERDATA });

const initialState = {
  listPack: {
    1: { name: "nsp", price: 0 },
    2: { name: "sp", price: 5940000 },
  },
  listColor: {
    1: { name: "polawhite", price: 0 },
    2: { name: "black", price: 0 },
    3: { name: "orange", price: 10050000 },
  },
  listWheel: {
    1: { name: "20alloy", price: 0 },
    2: { name: "20multialloy", price: 1030000 },
  },
  listCover: {
    1: { name: "NapaBlack", price: 0 },
    2: { name: "NapaBrown", price: 6250000 },
    3: { name: "NapaRed", price: 5430000 },
  },
  listTrim: {
    1: { name: "BlackPiano", price: 0 },
    2: { name: "Carbon", price: 6040000 },
  },
  listSteering: {
    1: { name: "Napa", price: 0 },
    2: { name: "Dinamica", price: 870000 },
  },
};
export default function userData(state = initialState, action) {
  switch (action.type) {
    case MODIFY_USERDATA:
      return { ...action.data };
    case INIT_USERDATA:
      return initialState;
    default:
      return state;
  }
}
