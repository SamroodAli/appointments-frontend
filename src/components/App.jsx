import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { NotificationContainer } from "react-notifications";
import redux from '../redux';
import Routes from './Routes';
import Sidebar from './sidebar';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <Provider store={redux.store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <NotificationContainer />
          <Sidebar />
          <Routes />
        </Router>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
