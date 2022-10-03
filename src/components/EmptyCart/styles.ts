import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import IconIoniicons from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(120)}px;
  background-color: ${({theme}) => theme.colors.shape};

  border-radius: 20px;

  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({theme}) => theme.fonts.primary_regular};
  color: ${({theme}) => theme.colors.text_details};
`;

export const Icon = styled(IconIoniicons)``;
