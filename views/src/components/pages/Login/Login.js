import React, { Component } from "react";
import Helmet from "react-helmet";
import { Container } from "reactstrap";

import { connect } from "react-redux";
import { login } from "../../../actions/auth/auth";
import { clearErrors } from "../../../actions/auth/errors";
import PropTypes from "prop-types";

import Nav from '../../../components/organisms/Nav/';

import Signin from "../../reactors/Signin";



import "./Login.scss";

class Login extends Component {
    state = {
        email: "",
        password: ""
    };  

    static propTypes = {
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidMount() {
        const { clearErrors } = this.props;
        clearErrors();
    };

    componentDidUpdate(prevProps) {
        const { error } = this.props;

        if(error !== prevProps.error) {
            if(error.id === "LOGIN_FAILED") {
                this.setState({ message: error.message.message });
            } else {
                this.setState({ message: null });
            };
        };
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { login } = this.props;
        const { email, password } = this.state;

        login({ email, password });
    };

    render() {
        const { email, password } = this.state;  

        return (
            <div>
                <Helmet>
                    <meta name="description" content=""/>
                    <meta name="keywords" content=""/>
                    <title>Login</title>
                </Helmet>
                <Nav/>
                <Container>
                    <h1>Login</h1>
                    <Signin/>
                    <a href="/login">Forgot Password</a>
                </Container>

            </div>
        );
    };
};

const mapStateToProps = state => ({
    error: state.error
});

const mapDispatchToProps = { login, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(Login);