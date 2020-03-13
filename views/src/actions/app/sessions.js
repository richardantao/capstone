import { 
    SESSION_REQUESTED,
    SESSION_CREATED, SESSION_FETCHED,
    SESSION_RETURNED, SESSION_UPDATED, SESSION_DELETED
} from "../types"; 
import { tokenConfig } from "../auth/auth";
import { returnErrors } from "../auth/errors";
import axios from "axios";

/**
 * @summary - 
 * @description - 
 * @return {Object} - 
 */
export const setLoading = () => {
    return {
        type: SESSION_REQUESTED
    };
};

/**
 * @summary - 
 * @description -  
 * @param  {Object} session - object containing the new session properties
 * @param  {function} dispatch - sends action to reducer
 * @param  {function} getState - retrieves token configuration
 * @return {Object} - action type and payload 
 */
export const createSession = session => (dispatch, getState) => {
    dispatch(setLoading());
    
    axios.post("/api/v1/sessions", session, tokenConfig(getState))
    .then(res => dispatch({
        type: SESSION_CREATED,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.response.data, err.response.status, "SESSIONS_ERROR")
    ));
};

/**
 * @summary - 
 * @description -  
 * @param  {function} dispatch - sends action to reducer
 * @param  {function} getState - retrieves token configuration
 * @return {Object} - action type and payload 
 */
export const fetchSessions = () => (dispatch, getState) => {
    dispatch(setLoading());
    
    axios.post("/api/v1/sessions", tokenConfig(getState))
    .then(res => dispatch({
        type: SESSION_FETCHED,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.response.data, err.response.status, "SESSIONS_ERROR")
    ));
};

/**
 * @summary - 
 * @description -  
 * @param  {string} id - ObjectId of the session to return
 * @param  {function} dispatch - sends action to reducer
 * @param  {function} getState - retrieves token configuration
 * @return {Object} - action type and payload 
 */
export const editSession = id => (dispatch, getState) => {
    dispatch(setLoading());
    
    axios.post(`/api/v1/sessions/${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: SESSION_RETURNED,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.response.data, err.response.status, "SESSIONS_ERROR")
    ));
};

/**
 * @summary - 
 * @description -  
 * @param  {string} id - ObjectId of the session to update
 * @param  {Object} session - object containing the updated properties
 * @param  {function} dispatch - sends action to reducer
 * @param  {function} getState - retrieves token configuration
 * @return {Object} - action type and payload 
 */
export const updateSession = (id, session) => (dispatch, getState) => {
    dispatch(setLoading());
    
    axios.post(`/api/v1/sessions/${id}`, session, tokenConfig(getState))
    .then(res => dispatch({
        type: SESSION_UPDATED,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.response.data, err.response.status, "SESSIONS_ERROR")
    ));
};

/**
 * @summary - 
 * @description -  
 * @param  {string} id - ObjectId of the session to delete
 * @param  {function} dispatch - sends action to reducer
 * @param  {function} getState - retrieves token configuration
 * @return {Object} - action type and payload 
 */
export const deleteSession = id => (dispatch, getState) => {
    dispatch(setLoading());
    
    axios.post(`/api/v1/sessions/${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: SESSION_DELETED,
        payload: id
    }))
    .catch(err => dispatch(
        returnErrors(err.response.data, err.response.status, "SESSIONS_ERROR")
    ));
};