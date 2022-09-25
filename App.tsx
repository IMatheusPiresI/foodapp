import React from 'react';

import 'react-native-gesture-handler';

import {ThemeProvider} from 'styled-components';
import AppRoutes from './src/routes';

import theme from './src/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
