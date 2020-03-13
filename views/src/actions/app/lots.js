import { 
    LOTS_REQUESTED,
    LOTS_FETCHED, LOT_INSPECTED
} from "../types"; 
import { tokenConfig } from "../auth/errors";
import { returnErrors } from "../auth/errors";
import axios from "axios";

export const setLoading = () => {
    return {
        type: LOTS_REQUESTED
    };
};  

export const fetchLots = () => {

};

export const inspectLot = id => (dispatch, getState) => {
    dispatch(setLoading());

    axios.get(``, )
};