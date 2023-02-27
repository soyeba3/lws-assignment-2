import { createStore } from "redux";
import flightReducer from "./flight/flightReducer";

const store = createStore(flightReducer);

export default store;
