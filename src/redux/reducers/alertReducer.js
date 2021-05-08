import { REMOVE_ALERT, SET_ALERT } from "../types";
const initialState = [];

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
    case SET_ALERT:
        return [ ...state, ...payload ];
    case REMOVE_ALERT:
        return;
    case typeName:
        return;

    default:
        return state;
    }
};
