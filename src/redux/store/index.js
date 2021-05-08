import rootReducers from "../reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducers, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
); // over production remove composeWithDevTools




export default store;
