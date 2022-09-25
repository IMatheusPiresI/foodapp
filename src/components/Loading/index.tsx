import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components';

type LoadingProps = {
  color?: string;
};

export const Loading: React.FC<LoadingProps> = ({color}) => {
  const theme = useTheme();
  return (
    <ActivityIndicator
      size="large"
      color={color ? color : theme.colors.shape}
      style={{flex: 1}}
    />
  );
};
