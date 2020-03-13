import { combineReducers } from "redux";

/* --- Auth --- */
import auth from "./auth/auth";
import error from "./auth/errors";

/* --- Data --- */
import lot from "./app/lots";
import session from "./app/sessions";
import lot from "./lots";
import session from "./sessions";

export default combineReducers({
    auth,
    error,
    lot,
    session
});