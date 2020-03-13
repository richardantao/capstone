import React, { Component } from "react";
import Helmet from "react-helmet";

import { connect } from "react-redux";
// import { } from "../../../actions/";
import PropTypes from "prop-types";

import AuthNav from "../../organisms/AuthNav";
import AppNav from "../../organisms/AppNav";

class List extends Component {
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
                    <title>List</title>
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

export default connect (mapStateToProps, mapDispatchToProps)(List);