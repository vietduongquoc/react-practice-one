import React, { Component } from 'react';
import ErrorComponent from './ErrorComponent';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    // Error handling here
    this.setState({ hasError: true });
    // Log error information if necessary
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      // Display ErrorComponent if there is an error
      return <ErrorComponent />;
    }
    // If there are no errors, render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;