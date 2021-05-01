const initialState = {
    token : localStorage.getItem("token"),
    isAuthenticated : false,
    loading : false, // apply loader/spinner
    user : null,

};


export default (state = initialState, action) => {

const { type, payload } = action;
    switch (type) {

    case typeName:
        return { ...state, ...payload };

    default:
        return state;
    }
};
