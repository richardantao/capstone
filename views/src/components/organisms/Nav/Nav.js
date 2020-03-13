import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import AppLinks from "../../molecules/AppLinks";
import AuthLinks from "../../molecules/AuthLinks";

import "./Nav.scss";

class Nav extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool
    };

    render() {
        const { isAuthenticated } = this.props;

        return (
            <nav id="nav" role="navigation">
                { isAuthenticated ? <AppLinks/> : <AuthLinks/> }
            </nav>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Nav);