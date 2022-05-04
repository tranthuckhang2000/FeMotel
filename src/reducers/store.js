import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import findMotelReducer from './Find.Reducer';
import accountReducer from "./Account.Reducer";

const reducer = combineReducers({
    account: accountReducer,
    findMotel: findMotelReducer,
});

export default configureStore({reducer});
