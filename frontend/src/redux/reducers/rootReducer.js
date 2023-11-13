import { combineReducers } from "redux";
import toastReducer from "./toastReducer";

export const rootReducer = combineReducers({
    toastSate: toastReducer
})