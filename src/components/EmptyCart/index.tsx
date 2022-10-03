import React from 'react';
import {useTheme} from 'styled-components';
import * as S from './styles';

export const EmptyCart: React.FC = () => {
  const theme = useTheme();
  return (
    <S.Container>
      <S.Title>No foods in cart</S.Title>
      <S.Icon name="fast-food-outline" size={55} color={theme.colors.view} />
    </S.Container>
  );
};
