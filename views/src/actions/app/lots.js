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

export const fetchLots = (dispatch, getState) => {
    dispatch(setLoading());

    axios.get(`/api/v1/lots`, tokenConfig(getState))
    .then(res => dispatch({
        type: LOT_INSPECTED,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.response.data, err.response.status, "LOT_ERROR")
    ))
};

export const inspectLot = id => (dispatch, getState) => {
    dispatch(setLoading());

    axios.get(`/api/v1/lots/${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: LOTS_FETCHED,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.response.data, err.response.status, "LOT_ERROR")
    ));
};