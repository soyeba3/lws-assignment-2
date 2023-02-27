import { ADD, REMOVE } from "./actionTypes";

const initialState = [];

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const updateState = [...state, action.payload];
      return updateState;
    case REMOVE:
      const newState = state.filter((item, index) => index !== action.payload);
      return newState;

    default:
      return state;
  }
};

export default flightReducer;
