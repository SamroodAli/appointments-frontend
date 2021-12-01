import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import redux from '../redux';
import Routes from './Routes';
import './style.css';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <Provider store={redux.store}>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
