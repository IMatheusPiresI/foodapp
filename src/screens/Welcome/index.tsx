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
      <S.Title>
        Get {'\n'}
        the Fastest {'\n'}
        Delivery
      </S.Title>

      <S.SubTitle>
        Order Food and get {'\n'}
        Delivery in Fastest time in Town
      </S.SubTitle>

      <S.StartButton onPress={handleNavigateHome}>
        <S.ButtonText>Get Started</S.ButtonText>
      </S.StartButton>

      <S.MotoImage
        source={require('../../assets/images/moto.png')}
        resizeMode={'contain'}
      />
    </S.Container>
  );
};
