import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import findMotelReducer from "./Find.Reducer";
import accountReducer from "./Account.Reducer";
import motelReducer from "./Motel.Reducer";

const reducer = combineReducers({
  account: accountReducer,
  findMotel: findMotelReducer,
  motel: motelReducer,
});

export default configureStore({ reducer });
