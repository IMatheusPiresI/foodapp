import {TouchableOpacity} from 'react-native';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.colors.header_home};
  padding: 0 10px;
  padding: ${getStatusBarHeight() + 40}px 15px ${getBottomSpace() + 20}px 15px;

  align-items: center;

  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(42)}px;
  font-family: ${({theme}) => theme.fonts.primary_bold};
  color: ${({theme}) => theme.colors.action_items};
  text-align: center;
`;

export const StartButton = styled(TouchableOpacity)`
  margin-top: 60px;
  background-color: ${({theme}) => theme.colors.action_items};
  width: ${RFValue(200)}px;
  border-radius: 150px;
  padding: 8px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.primary_medium};
  color: ${({theme}) => theme.colors.shape};
`;

export const Image = styled.Image`
  width: ${RFValue(300)}px;
  height: ${RFValue(250)}px;
  margin-right: 50px;
`;
