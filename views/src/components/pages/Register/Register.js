import React, { Component } from "react";
import Helmet from "react-helmet";
import { Container } from "reactstrap";

import { connect } from "react-redux";
import { register } from "../../../actions/auth/auth";
import { clearErrors } from "../../../actions/auth/errors";
import PropTypes from "prop-types";

import { Alert, Form, FormGroup, Label, Input, Button } from "reactstrap";

import AppNav from '../../../components/organisms/AppNav';
import AuthNav from '../../../components/organisms/AuthNav';

import RegisterReactor from "../../reactors/Register";

import "./Register.scss";

class Register extends Component {
    state = {
        first: "",
        last: "",
        email: "",
        password: ""
    };

    static propTypes = {
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidMount() {
        const { clearErrors } = this.props;

        clearErrors();
    };

    componentDidUpdate(prevProps) {
        const { error } = this.props; 

        if(error !== prevProps.error) {
            if(error.id === "REGISTER_FAILED") {
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
    
        const { register } = this.props;
        const { first, last, email, password } = this.state;

        register({ first, last, email, password });
    };  

    render() {
        const { first, last, email, password, message } = this.state;

        return (
            <>
                <Helmet>
                    <meta name="description" content="" />
                    <meta name="keywords" content="" />
                    <title>Register</title>
                </Helmet>
                <AuthNav/>
                <Container>
                    <h1>Register For An Account</h1>
                    <RegisterReactor />
                </Container>
                
            </>
        );
    };
};

const mapStateToProps = state => ({
    error: state.error
});

const mapDispatchToProps = { register, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(Register);

