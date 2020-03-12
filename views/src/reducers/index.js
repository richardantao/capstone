import { combineReducers } from "redux";

/* --- Auth --- */
import auth from "./auth/auth";
import error from "./auth/errors";

/* --- Data --- */
import parking from "./parking";
import session from "./session";

export default combineReducers({
    auth,
    error,
    parking,
    session
});