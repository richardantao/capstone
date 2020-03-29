import React from "react";
import Helmet from "react-helmet";
import { Container } from "reactstrap";

import Nav from '../../../components/organisms/Nav/';
import Signin from "../../reactors/Signin";

import "./Login.scss";

export default () => {
    return (
        <>
            <Helmet>
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>
                <title>Login</title>
            </Helmet>
            <Nav/>
            <Container>
                <h1>Login</h1>
                <Signin/>
                <a href="#forgot-password">Forgot Password</a><br/>
                <span>Don't have an account?</span> <a href="/register">Sign up</a>
            </Container>
        </>  
    );
};