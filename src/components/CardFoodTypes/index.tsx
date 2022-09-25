import React from 'react';
import {StyleSheet} from 'react-native';
import {RectButtonProps} from 'react-native-gesture-handler';
import {useTheme} from 'styled-components';
import * as S from './styles';

type CardFoodTypesProps = RectButtonProps & {
  name: string;
  imageUrl: string;
};

export const CardFoodTypes: React.FC<CardFoodTypesProps> = ({
  name,
  imageUrl,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <S.Container
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      }}
      {...rest}>
      <S.ImageFood source={{uri: imageUrl}} resizeMode="contain" />
      <S.NameFood>{name}</S.NameFood>
    </S.Container>
  );
};
