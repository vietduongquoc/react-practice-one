import React from 'react';

const ErrorComponent = () => {
    return (
        <div className={"error-page"}>
            <h2 className={"oops"}>Oops!</h2>
            <p className={"message"}>Something went wrong...</p>
        </div>
    );
}

export default ErrorComponent;
