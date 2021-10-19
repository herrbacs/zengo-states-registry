import { applyMiddleware, combineReducers, createStore } from "redux";
import stateReducer from "./State/stateReducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    states: stateReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
