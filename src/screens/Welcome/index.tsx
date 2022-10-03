import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import * as S from './styles';

export const Welcome: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('Home');
  };

  return (
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <S.Title>MyAppFood {'\n'}</S.Title>

      <S.Image
        source={require('../../assets/images/delivery.png')}
        resizeMode="contain"
      />

      <S.StartButton onPress={handleNavigateHome}>
        <S.ButtonText>Get Started</S.ButtonText>
      </S.StartButton>
    </S.Container>
  );
};
