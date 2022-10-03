import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackWelcome} from './stack.routes';

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <StackWelcome />
    </NavigationContainer>
  );
};

export default AppRoutes;
