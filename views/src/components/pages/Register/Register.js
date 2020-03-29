import React from "react";
import Helmet from "react-helmet";
import { Container } from "reactstrap";

import Nav from '../../../components/organisms/Nav';
import Signup from "../../reactors/Signup";

import "./Register.scss";

export default () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="New users can register an account" />
                <meta name="keywords" content="new, users, register, account, profile" />
                <title>Register</title>
            </Helmet>
            <Nav/>
            <Container>
                <h1>Register</h1>
                <Signup />
                <span>Already have an account?</span> <a href="/register">Login</a>
            </Container>
        </>
    );
};