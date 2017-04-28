import React, { Component } from 'react';  
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {  
  class Authentication extends Component {
    static get contextTypes() {
      return {
        router: React.PropTypes.object,
      }
    }

    componentWillMount() {
      if(!this.props.authenticated) {
        this.context.router.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated) {
        this.context.router.push('/signin');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}