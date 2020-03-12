import React, { Component } from "react";
import Helmet from "react-helmet";

import { connect } from "react-redux";
import { } from "../../../actions/";
import PropTypes from "prop-types";

import Nav from "../../organisms/Nav";

import "./Maps.scss";

class Maps extends Component {
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
                <Nav/>
                <main role="main">

                </main>
            </>
        );  
    }
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = { };

export default connect (mapStateToProps, mapDispatchToProps)(Maps);