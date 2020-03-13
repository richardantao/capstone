import React, { Component } from "react";

import { connect } from "react-redux";
import { createSession } from "../../../actions/session";
import { clearErrors } from "../../../actions/auth/errors";
import PropTypes from "prop-types";

import { 
    Alert, Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label, Input, FormGroup, 
} from "reactstrap"; 

class SessionNew extends Component {
    state = {
        modal: false,
        message: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        session: PropTypes.object.isRequired,
        createSession: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidMount() {
        const { clearErrors } = this.props;
        clearErrors();
    };

    componentDidUpdate(prevProps) {
        const { 
            error,
            session: { sessions } 
        } = this.props;

        if(error !== prevProps.error) {
            if(error.id === "SESSION_ERROR") {
                this.setState({ message: error.message.message });
            } else {
                this.setState({ message: null });
            };
        };
    
        if(sessions !== prevProps.session.sessions) {
            this.setState({

            });
        };
    };

    toggle = () => {
        const { modal } = this.state;
        this.setState({ modal: !modal });
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleCancel = () => {
        this.setState({

        });

        this.toggle();
    };

    handleSubmit = e => {
        e.preventDefault();

        const { } = this.state;
        const { createSession } = this.props;

        const session = {

        };

        createSession(session);

        setTimeout(() => {
            this.toggle()
        }, 2000);
    };

    render() {
        const { modal, message } = this.state;

        return (
            <>
                <Modal isOpen={modal}>
                    <ModalHeader toggle={this.toggle}>
                        New Session
                    </ModalHeader>
                    { message === "Session created" ? <Alert color="success">{message}</Alert>
                    : message ? <Alert color="danger">{message}</Alert>
                    : null }
                    <Form>
                        <ModalBody>
                            <FormGroup>
                                <Label for=""></Label>
                                <Input
                                    name=""
                                    type=""
                                    value={}
                                    onChange={}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>

                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="button">Cancel</Button>
                            <Button type="submit">Add Session</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            </>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    sessions: state.session
});

const mapDispatchToProps = { createSession, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(SessionNew);