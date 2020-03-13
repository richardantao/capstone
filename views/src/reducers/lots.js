import { 
    LOT_REQUESTED, LOT_ERROR,
    LOTS_FETCHED, LOT_INSPECTED
} from "../actions/types";

const initialState = {
    loading: false,
    lots: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOT_REQUESTED: 
            return {
                ...state,
                loading: true
            };
        case LOT_ERROR:
            return {
                ...state,
                loading: false
            };
        case LOTS_FETCHED:
            return {
                ...state,
                loading: false,
                lots: action.payload
            };
        case LOT_INSPECTED:
            return {
                ...state,
                loading: false,
                lots: state.lot.map(lot => {
                    if(lot._id !== action._id) {
                        return lot;
                    } else return {
                        lot: action.payload 
                    };
                })
            };
        default: 
            return state;
    };
};