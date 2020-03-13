import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchLots } from "../../../actions/app/lots";
import { clearErrors } from "../../../actions/auth/errors";
import PropTypes from "prop-types";

import { Alert } from "reactstrap";

import "./Maps.scss";

class Maps extends Component {
    state = {

    };

    static propTypes = {
        error: PropTypes.object.isRequired,
        lot: PropTypes.object.isRequired,
        fetchLots: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidMount() {
        
    };

    componentDidUpdate() {
        const { error } = this.props;

        if(error !== prevProps.error) {
            if(error.id === "LOT_ERROR") {
                this.setState({
                    message: error.message.message
                });
            } else {
                this.setState({ message: null });
            };
        };

        
    };

    render() {
        const { message } = this.state;

        return (
            <>
                { message ? <Alert color="danger">{message}</Alert> : null }
            </>
        );  
    }
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    lot: state.lot
});

const mapDispatchToProps = { fetchLots, clearErrors };

export default connect (mapStateToProps, mapDispatchToProps)(Maps);