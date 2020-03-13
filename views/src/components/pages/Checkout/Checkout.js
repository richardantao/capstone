import React, { Component } from "react";
import Helmet from "react-helmet";

import { connect } from "react-redux";
import { createSession } from "../../../actions/session";
import { clearErrors } from "../../../actions/errors";
import PropTypes from "prop-types";

import {
    Alert, Button,
    Form, FormGroup, Label, Input
} from "reactstrap";

import "./Checkout.scss";

class Checkout extends Component {
    state = {  
        message: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        createSession: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidMount() {

    };

    componentDidUpdate(prevProps) {
        const { error } = this.props;

        if(error !== prevProps.error) {
            if (error.id === "") {
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

        const { createSession } = this.props;
        const { } = this.state;

        const session = {

        };

        createSession(session);
    };

    handleCancel = () => {
        this.setState({ });
    };

    render() {
        const { message } = this.state; 

        return (
            <>
                <Helmet>
                    <meta name="description" content="" />
                    <meta name="keywords" content="" />
                    <title>Checkout</title>
                </Helmet>
                <Form onSubmit={this.handleSubmit}>
                        {  message === "" ? (
                            <Alert color="success">{message}</Alert>
                        ): message ? (
                            <Alert color="danger">{message}</Alert>
                        ): null}
                    <FormGroup>
                        <Label for=""></Label>
                        <Input
                            name=""
                            type=""
                            value={}
                            onChange={this.handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button type="button" onClick={this.handleCancel} className="">
                            Cancel Checkout
                        </Button>
                        <Button type="submit" className="">
                            Create Session
                        </Button>
                    </FormGroup>
                </Form>
            </>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

const mapDispatchToProps = { createSession, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);