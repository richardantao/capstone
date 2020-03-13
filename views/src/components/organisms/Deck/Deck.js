import React, { Component } from "react";

import { connect } from "react-redux";
import { } from "../../../actions/";
import PropTypes from "prop-types";

import { Col, Row } from "reactstrap";

import "./Deck.scss";

class Deck extends Component {
    state = {

    };

    static propTypes = {
        
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
                this.setState({

                });
            } else {
                this.setState({

                });
            };
        };

        if(lots !== prevProps.lot.lots) {
            this.setState({

            });
        };
    };

    render() {
        const { } = this.state;

        return (
            <Row>
                <Col>
                    <Row>
                        <Col>
                        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        
                        </Col>
                    </Row>
                </Col>
            </Row>
        );  
    }
};

const mapStateToProps = state => ({
    error: state.error,
    lot: state.lot
});

const mapDispatchToProps = { };

export default connect (mapStateToProps, mapDispatchToProps)(Deck);