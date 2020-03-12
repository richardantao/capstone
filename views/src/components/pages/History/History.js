import React, { Component } from "react";
import Helmet from "react-helmet";

import { connect } from "react-redux";
import { } from "../../../actions/";
import PropTypes from "prop-types";

import "./History.scss";

class History extends Component {
    state = {

    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired
    };

    componentDidMount() {

    };

    componentDidUpdate(prevProps) {

    };

    render() {
        const { } = this.state;

        return (
            <>
            <Helmet>
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>
                <title>History</title>
            </Helmet>
            </>
        );
    };

};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(History);