import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchLots } from "../../../actions/app/lots"; 
import { clearErrors } from "../../../actions/auth/errors"; 
import PropTypes from "prop-types"; 

import { UncontrolledTooltip } from "reactstrap"; 

class LotWidget extends Component {
    state = {
        _id: ""
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        lot: PropTypes.object.isRequired
    };

    componentDidMount() {
        const { } = this.props;

    };

    render() {
        const { } = this.state;
        const { placement, target } = this.props;

        return (
            <UncontrolledTooltip placement={placement} target={target}>
                {}
            </UncontrolledTooltip>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    lot: state.lot
});

const mapDispatchToProps = { fetchLots, clearErrors};

export default connect(mapStateToProps, mapDispatchToProps)(LotWidget);