import { ERRORS_RETURNED, ERRORS_CLEARED } from "../../actions/types";

const initialState = {
    message: null,
    status: null,
    id: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ERRORS_RETURNED:
            return {
                message: action.payload.message,
                status: action.payload.status,
                id: action.payload.id
            };
        case ERRORS_CLEARED:
            return {
                message: null,
                status: null,
                id: null
            };
        default:
            return state;
    };
};