import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppTabRoutes from './tab.routes';
import {StackWelcome} from './stack.routes';

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <StackWelcome />
    </NavigationContainer>
  );
};

export default AppRoutes;
