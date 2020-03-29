import React, { Component } from "react";

import { connect } from "react-redux";
import { register } from "../../../actions/auth/auth";
import { clearErrors } from "../../../actions/auth/errors";
import PropTypes from "prop-types";

import { Alert, Form, FormGroup, Label, Input, Button } from "reactstrap";

import "./Signup.scss";

class Signup extends Component {
    state = {
        first: "",
        last: "",
        email: "",
        password: "",
        message: null
    };

    static propTypes = {
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    async componentDidMount() {
        const { clearErrors } = this.props;
        await clearErrors();
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

        const user = {
            name: {
                first, 
                last
            }, 
            email, 
            password 
        };

        register(user);
    };  

    render() {
        const { first, last, email, password, message } = this.state;

        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    { message ? <Alert color="danger">{message}</Alert>
                    : null }
                    <FormGroup>
                        <Label for="first">First Name</Label>
                        <Input 
                            name="first"
                            type="text"
                            value={first}
                            onChange={this.handleChange}
                            required
                        />

                        <Label for="last">Last Name</Label>
                        <Input 
                            name="last"
                            type="text"
                            value={last}
                            onChange={this.handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input 
                            name="email"
                            type="email"
                            value={email}
                            onChange={this.handleChange}
                            required
                        />

                        <Label for="password">Password</Label>
                        <Input 
                            name="password"
                            type="password"
                            value={password}
                            onChange={this.handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" color="primary">Register </Button>
                    </FormGroup>
                </Form>
            </>
        );
    };
};

const mapStateToProps = state => ({
    error: state.error
});

const mapDispatchToProps = { register, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);