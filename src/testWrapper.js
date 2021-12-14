import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import redux from './redux';

const Wrapper = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <Provider store={redux.store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
