import styled from 'styled-components/native';

import {RectButton} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: 20px;
  margin-bottom: 15px;
  padding: 5px 0;
`;

export const ImageNameWrapper = styled.View`
  align-items: center;
  justify-content: center;
  width: 35%;
`;

export const ImageWrapper = styled.View`
  width: ${RFValue(70)}px;
  height: ${RFValue(70)}px;
  background-color: ${({theme}) => theme.colors.brown};

  border-radius: 38px;

  align-items: center;
  justify-content: center;

  border-width: 1.5px;
  border-color: ${({theme}) => theme.colors.action_items};
`;

export const ImageFood = styled.Image`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;

  border-radius: 38px;
`;

export const NameFood = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({theme}) => theme.fonts.primary_regular};
  color: ${({theme}) => theme.colors.text};
`;

export const QuantityFoodWrapper = styled.View`
  width: 40%;
  align-items: center;
  justify-content: center;
`;

export const Quantity = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.primary_regular};
  color: ${({theme}) => theme.colors.text_add_cart};
  background-color: ${({theme}) => theme.colors.shape_dark};
  padding: 0px 20px;
  margin: 0 16px;
  border-radius: 10px;
`;

export const BoxQuantityFood = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonChangeQuantity = styled(RectButton)`
  width: ${RFValue(35)}px;
  height: ${RFValue(35)}px;
  background-color: ${({theme}) => theme.colors.shape_dark};

  align-items: center;
  justify-content: center;
  border-radius: 35px;
`;

export const Icon = styled(IconFontAwesome)``;

export const ValueWrapper = styled.View`
  align-items: center;
  justify-content: center;
  width: 25%;
`;

export const Value = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({theme}) => theme.fonts.primary_regular};
  color: ${({theme}) => theme.colors.like};
`;
