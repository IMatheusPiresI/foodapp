import {RectButton} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.shape};
  align-items: center;
  justify-content: center;
  margin-right: 20px;
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
