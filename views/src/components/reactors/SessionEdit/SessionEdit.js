import React, { Component } from "react";

import { connect } from "react-redux";
import { updateSession, deleteSession } from "../../../actions/session";
import { clearErrors } from "../../../actions/auth/errors";
import PropTypes from "prop-types";

class SessionEdit extends Component {
    state = {
        modal: false,
        message: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        session: PropTypes.object.isRequired,
        updateErrors: PropTypes.func.isRequired,
        deleteSession: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    async componentDidMount() {
        const { clearErrors } = this.props;
        await clearErrors();
    };

    componentDidUpdate(prevProps) {
        const { 
            error,
            session: { sessions },
        } = this.props;

        if(error !== prevProps.error) {
            if(error.id === "SESSION_ERROR") {
                this.setState({ message: error.message.message });
            } else {
                this.setState({ message: null });
            };
        };

        if(sessions !== prevProps.session.sessions) {
            this.setState({

            });
        };
    };

    toggle = () => {
        const { modal } = this.state;
        this.setState({ modal: !modal });
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };  

    handleDelete = id => {
        const { deleteSession } = this.props;
        deleteSession(id);

        this.toggle();
    };

    handleCancel = () => {
        this.setState({
        
        });

        this.toggle();
    };

    handleSubmit = e => {
        e.preventDefault();

        const { } = this.state;
        const { updateSession } = this.props;

        const session = {

        };

        updateSession(session);

        setTimeout(() => {
            this.toggle();
        }, 2000);
    };

    render() {
        const { modal, message } = this.state; 
        
        return (
            <>

                
            </>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    session: state.session 
});

const mapDispatchToProps = { updateSession, deleteSession, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(SessionEdit);