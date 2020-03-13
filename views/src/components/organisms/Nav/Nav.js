import React, { Component } from 'react';

import AuthNav from '../AuthNav';
import AppNav from '../AppNav';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class Nav extends Component {

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  render() {
    const {isAuthenticated} = this.props;

    return (
      <>
        <div>{isAuthenticated ? <AppNav/> : <AuthNav/>}</div>
      </>
    );
  };
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);