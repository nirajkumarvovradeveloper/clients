const initialState = {

};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
    case SET_ALERT:
        return { ...state, ...payload };
    case REMOVE_ALERT:
        return { ...state, ...payload };
    case typeName:
        return;

    default:
        return state;
    }
};
