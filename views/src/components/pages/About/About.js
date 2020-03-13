import React, { Component } from "react";
import Helmet from "react-helmet";

import { connect } from "react-redux";
import { fetchSessions, editSession, updateSession, deleteSession } from "../../../actions/app/sessions";
import PropTypes from "prop-types";

import AppNav from "../../organisms/AppNav";

import "./About.scss";

import AuthNav from '../../organisms/AuthNav';

class About extends Component {
    state = {

    };

    static propTypes = {
   
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
                    <title>About</title>
                </Helmet>
                <AuthNav/>
                <main role="main">
                    <h1>About</h1>
                    <p>Welcome to the about page.</p>
                </main>
            </>
        );
    };
};

export default About;