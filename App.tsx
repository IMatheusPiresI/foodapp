import React from 'react';

import 'react-native-gesture-handler';

import {ThemeProvider} from 'styled-components';

import AppRoutes from './src/routes';

import {Provider} from 'react-redux';
import {store} from './src/store';

import theme from './src/styles/theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
