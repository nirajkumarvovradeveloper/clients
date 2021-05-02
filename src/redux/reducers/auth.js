import { LOGIN_SUCCESS, REGISTER_SUCCESS } from "../types";

const initialState = {
    token : localStorage.getItem("token"),
    isAuthenticated : false,
    loading : false, // apply loader/spinner
    user : null,

};


export default (state = initialState, action) => {

const { type, payload } = action;
    switch (type) {
    case LOGIN_SUCCESS:

    case REGISTER_SUCCESS:

        localStorage.setItem("token", payload.token);

    case typeName:
        return { ...state, ...payload };

    default:
        return state;
    }
};
