import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';

import IconFontAwesomeLib from 'react-native-vector-icons/FontAwesome';

export const ContainerButtonCartWrapper = styled.View`
  width: 100%;
  height: ${RFValue(100)}px;
  background-color: ${({theme}) => theme.colors.shape};
  position: absolute;
  bottom: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled(RectButton)`
  align-items: center;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.shape_dark};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const IconWrapper = styled.View`
  background-color: ${({theme}) => theme.colors.action_items};
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const IconFontAwesome = styled(IconFontAwesomeLib)``;

export const TitleWrapper = styled.View`
  padding: 0 10px;
  height: ${RFValue(50)}px;
  align-items: center;
  justify-content: center;
`;

export const TitleButton = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.primary_regular};
  color: ${({theme}) => theme.colors.text_add_cart};
`;
