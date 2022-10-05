import React from 'react';

import 'react-native-gesture-handler';

import {ThemeProvider} from 'styled-components';

import AppRoutes from './src/routes';

import {Provider} from 'react-redux';
import {persistor, store} from './src/store';

import theme from './src/styles/theme';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
