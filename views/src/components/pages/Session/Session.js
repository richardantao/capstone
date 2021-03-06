import React, { Component } from "react";
import Helmet from "react-helmet";

import { connect } from "react-redux";
import { fetchSessions, editSession, updateSession, deleteSession } from "../../../actions/app/sessions";
import PropTypes from "prop-types";

import AppNav from "../../organisms/AppNav";

import "./Session.scss";

import AuthNav from '../../../components/organisms/AuthNav/';

class Session extends Component {
    state = {

    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        session: PropTypes.object.isRequired,
        fetchSessions: PropTypes.func.isRequired,
        editSession: PropTypes.func.isRequired,
        updateSession: PropTypes.func.isRequired,
        deleteSession: PropTypes.func.isRequired 
    };

    componentDidMount() {

    };

    render() {
        const { } = this.state;

        return (
            <>
                <Helmet>
                    <meta name="description" content="" />
                    <meta name="keywords" content="" />
                    <title>Sessions</title>
                </Helmet>
                <AuthNav/>
                <AppNav/>
                <main role="main">

                </main>
            </>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    session: state.session
});

const mapDispatchToProps = { 
    fetchSessions,
    editSession, updateSession, deleteSession
};

export default connect(mapStateToProps, mapDispatchToProps)(Session);