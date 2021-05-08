import { v4 as uuid} from "uuid";
import { SET_ALERT } from "../types";
export const setAlert = (msg, alertType, timeout = 5000)=> (dispatch) => {
    // display the alerts
    const id = uuid();
    dispatch({
        type : SET_ALERT
    })

    //after specified time/default time ===> alerts should be disappeared.
};