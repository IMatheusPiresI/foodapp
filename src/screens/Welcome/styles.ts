import {TouchableOpacity} from 'react-native';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.colors.shape};
  padding: 0 10px;
  padding: ${getStatusBarHeight() + 40}px 15px ${getBottomSpace() + 20}px 15px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(42)}px;
  font-family: ${({theme}) => theme.fonts.primary_bold};
  color: ${({theme}) => theme.colors.text};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.primary_regular};
  color: ${({theme}) => theme.colors.text};
  line-height: 25px;
  margin-top: 10px;
`;

export const StartButton = styled(TouchableOpacity)`
  margin-top: 25px;
  background-color: ${({theme}) => theme.colors.action_items};
  width: 150px;
  border-radius: 150px;
  padding: 8px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.primary_medium};
  color: ${({theme}) => theme.colors.shape};
`;

export const MotoImage = styled.Image`
  width: 100%;
  height: ${RFValue(350)}px;
  position: absolute;
  bottom: 20px;
`;
