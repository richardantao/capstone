import { 
    AUTH_ERROR, USER_REQUESTED, USER_LOADED, LOGIN_SUCCESS,
    LOGIN_FAILED, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAILED 
} from "../types";
import { returnErrors } from "./errors";
import axios from "axios";

export const loadUser = (dispatch, getState) => {
    dispatch({ type: USER_REQUESTED });

    axios.get("/api/v1/users", tokenConfig(getState))
    .then(res => dispatch({
        type: USER_LOADED,
        payload: res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.message, err.status));
        dispatch({
            type: AUTH_ERROR
        });
    });
};

export const register = user => dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    axios.post("/api/v1/register", user, config)
    .then(res => dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data 
     }))
     .catch(err => {
         dispatch(
             returnErrors(err.data, err.status, "REGISTER_FAILED")
         );
         dispatch({
             type: REGISTER_FAILED
         });
     });
};

export const login = credentials => dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    axios.post("/api/v1/login", credentials, config)
    .then(res => dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
    }))
    .catch(err => {
        dispatch(
            returnErrors(err.data, err.status, "LOGIN_FAILED")
        );
        dispatch({
            type: LOGIN_FAILED
        });
    });
};

export const logout = () => dispatch => {
    axios.post("/api/v1/logout")
    .then(res => dispatch({
        type: LOGOUT_SUCCESS
    }))
    .catch(err => {
        returnErrors(err.data, err.status);
    });
};


export const tokenConfig = getState => {
    const token = getState().auth.token;

    const config = {
        headers: {
            "Content-Type": "application/json" 
        }
    };

    if(token) {
        config.headers["x-auth-token"] = token;
    };

    return config;
};