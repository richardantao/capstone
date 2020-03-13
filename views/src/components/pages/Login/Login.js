import React, { Component } from "react";
import Helmet from "react-helmet";

import { connect } from "react-redux";
import { login } from "../../../actions/auth/auth";
import { clearErrors } from "../../../actions/auth/errors";
import PropTypes from "prop-types";

import AppNav from '../../../components/organisms/AppNav';
import AuthNav from '../../../components/organisms/AuthNav/';


import { Form, FormGroup, Label, Input, Button } from "reactstrap";

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
            <>
                <Helmet>
                    <meta name="description" content=""/>
                    <meta name="keywords" content=""/>
                    <title>Login</title>
                </Helmet>
                <AuthNav/>
                <AppNav/>
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            name="email"
                            type="email"
                            placeholder="Email.."
                            value={email}
                            onChange={this.handleChange}
                        />

                        <Label for="password">Password</Label>
                        <Input
                            name="password"
                            type="password"
                            placeholder="Password.."
                            value={password}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit">Login</Button>                        
                    </FormGroup>
                </Form>
            </>
        );
    };
};

const mapStateToProps = state => ({
    error: state.error
});

const mapDispatchToProps = { login, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(Login);