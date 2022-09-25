import {RectButton} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

export const Container = styled(RectButton)`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(IconFontAwesome)`
  color: ${({theme}) => theme.colors.text_details};
`;
