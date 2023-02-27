import { ADD, REMOVE } from "./actionTypes";

export const addFlight = (value) => {
  return {
    type: ADD,
    payload: value,
  };
};

export const removeFlight = (value) => {
  return {
    type: REMOVE,
    payload: value,
  };
};
