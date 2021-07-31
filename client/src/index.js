import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createLogger } from 'redux-logger';
import reduxThunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';


import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import reducers from './reducers';
import App from './containers/App';

// enhancers
const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger({
  collapsed: true,
});

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#00a0b2',
    },
  }
});

const store = createStore(
  reducers,
  {
    auth: {
      authenticated: localStorage.getItem('token'),
    },
  },
  composedEnhancers(applyMiddleware(reduxThunk), applyMiddleware(logger))
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>
  ,
  document.getElementById('root')
);
