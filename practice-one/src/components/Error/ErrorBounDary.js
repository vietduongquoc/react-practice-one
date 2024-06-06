import React from 'react';
import { useErrorBoundary } from 'react-use-error-boundary';
import ErrorComponent from './ErrorComponent';

const ErrorBoundary = ({ children }) => {
  const [error, resetError] = useErrorBoundary();

  if (error) {
    return (
      <div>
        <ErrorComponent />
        <button onClick={resetError}>Try again</button>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
