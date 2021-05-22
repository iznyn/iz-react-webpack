/**
 * hooks/ErrorHandler/index.js
 */
import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import ErrorHelper from './Helper';

/**
 * Context
 */
export const ErrorContext = createContext();

/**
 * Provider that take loader data
 */
export function ErrorProvider({ children }) {
  const error = ErrorHelper();
  return (
    <ErrorContext.Provider value={error}>{children}</ErrorContext.Provider>
  );
}

ErrorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * useErrorHandler
 */
export function useErrorHandler() {
  return useContext(ErrorContext);
}
