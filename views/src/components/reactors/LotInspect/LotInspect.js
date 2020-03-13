import React, { Component } from "react";

import { connect } from "react-redux";
import { inspectLot } from "../../../actions/app/lots";
import { clearErrors } from "../../../actions/auth/errors"; 
import PropTypes from "prop-types";

import { 
    Alert, Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label, Input
} from "reactstrap"; 

class LotInspect extends Component {
    state = {
        modal: false,
        address: "",
        message: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        inspectLot: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidMount() {
         
    };

    componentDidUpdate(prevProps) {
        const { 
            error,
            lot: { lots }
        } = this.props;

        if(error !== prevProps.error) {
            if(error.id === "LOT_ERROR") {
                this.setState({ message: error.message.message });
            } else {
                this.setState({ message: null });
            };  
        };

        if(lots !== prevProps.lot.lots) {
            this.setState({
                address: lots.address
            });
        };
    };

    render() {
        const { modal, address, message } = this.state;

        return (
            <>
                <Modal isOpen={modal}>
                    <ModalHeader toggle="">
                        {address}
                    </ModalHeader>
                    <ModalBody>
                    { message === "" ? <Alert color="success">{message}</Alert>
                    : message ? <Alert color="danger">{message}</Alert>
                    : null }

                    <Label for=""></Label>
                    <Input
                        name=""
                        type=""
                        value=""
                        onChange={this.handleChange}
                        required
                    />

                    <Label for="address">Address</Label>
                    <Input
                        name="address"
                        type="text"
                        value={address}
                        onChange={this.handleChange}
                        required
                    />

                    </ModalBody>
                    <ModalFooter>
                        <Button type="button" href="/checkout">
                            Proceed to Checkout
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    lot: state.lot
});

const mapDispatchToProps = { inspectLot, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(LotInspect);