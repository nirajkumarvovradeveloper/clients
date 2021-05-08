import {combinedReducers} from "redux";

import alert from "../actions/"; // 1:34
export default combinedReducers({
    auth, //1:30
    alert,
});