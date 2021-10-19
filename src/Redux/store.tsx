import { applyMiddleware, combineReducers, createStore } from "redux";
import stateReducer from "./State/stateReducer";
import thunk from 'redux-thunk'
import cityReducer from "./City/cityReducer";

const rootReducer = combineReducers({
    states: stateReducer,
    cities: cityReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
