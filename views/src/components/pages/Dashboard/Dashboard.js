import React, { Component } from "react";
import Helmet from "react-helmet";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import AppNav from "../../organisms/AppNav";

import "./Dashboard.scss";

class Dashboard extends Component {
    state = {
        
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired
    };

    componentDidMount() {

    };

    render() {
        const { } = this.state;
        const { } = this.props;

        return (
            <>
                <Helmet>
                    <meta name="" content=""/>
                    <meta name="" content=""/>
                    <title>Dashboard</title>
                </Helmet>
                <AppNav/>
                <main role="main">

                </main>
            </>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);