import {RectButton} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import Animated from 'react-native-reanimated';

export const Container = styled(Animated.View)`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.shape};
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const ButtonFoodTypes = styled(RectButton)`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.shape};
  align-items: center;
  justify-content: center;
`;

export const ImageFood = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
`;

export const NameFood = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.primary_regular};
  margin-top: 10px;
`;
