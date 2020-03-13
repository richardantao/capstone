import { 
    SESSION_REQUESTED, SESSION_ERROR,
    SESSION_CREATED, SESSION_FETCHED,
    SESSION_RETURNED, SESSION_UPDATED, SESSION_DELETED
} from "../../actions/types";

const initialState = {
    loading: false,
    sessions: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SESSION_REQUESTED: 
            return {
                ...state,
                loading: true
            };
        case SESSION_ERROR:
            return {
                ...state,
                loading: false
            };
        case SESSION_CREATED:
            return {
                ...state,
                loading: false,
                sessions: [...state.sessions, action.payload]
            };
        case SESSION_FETCHED:
            return {
                ...state,
                loading: false,
                sessions: action.payload
            };
        case SESSION_RETURNED:
            return {
                ...state,
                loading: false,
                sessions: state.sessions.map(session => {
                    if(session._id !== action._id) {
                        return session;
                    } else return {
                        session: action.payload 
                    };
                })
            };
        case SESSION_UPDATED:
            return {
                ...state,
                loading: false,
                sessions: state.sessions.map(session => {
                    const { _id, title, start, end } = action.payload;
                    if(session._id !== _id) {
                        return session;
                    } else return {
                        ...state.sessions,
                        session: {
                            title,
                            date: {
                                start,
                                end
                            } // replace proper data
                        }
                    };
                })  
            };
        case SESSION_DELETED:
            return {
                ...state,
                loading: false,
                sessions: state.sessions.filter(session => session._id !== action.payload)
            };
        default: 
            return state;
    };
};