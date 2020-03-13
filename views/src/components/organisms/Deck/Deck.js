import React, { Component } from "react";
import Helmet from "react-helmet";

import { connect } from "react-redux";
// import { } from "../../../actions/";
import PropTypes from "prop-types";

import AuthNav from "../AuthNav";
import AppNav from "../AppNav";

import "./Maps.scss";

class Deck extends Component {
    state = {

    };

    static propTypes = {
        
    };

    componentDidMount() {

    };

    componentDidUpdate() {

    };

    render() {
        const { } = this.state;

        return (
            <>
                <Helmet>
                    <meta name="description" content=""/>
                    <meta name="keywords" content=""/>
                    <title>Maps</title>
                </Helmet>
                <AuthNav/>
                <AppNav/>
                <main role="main">

                </main>
            </>
        );  
    }
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = { };

export default connect (mapStateToProps, mapDispatchToProps)(Deck);