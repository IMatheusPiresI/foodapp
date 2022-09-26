import {RectButton} from 'react-native-gesture-handler';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import IconEntypoLib from 'react-native-vector-icons/Entypo';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerWrapper = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(280)}px;
  background-color: ${({theme}) => theme.colors.header_details};
  padding: ${getStatusBarHeight() + 20}px 0px 0px;

  align-items: center;
  justify-content: space-around;
`;

export const BackWrapper = styled.View`
  position: absolute;
  top: ${getStatusBarHeight() + 10}px;
  left: 20px;
`;

export const ImageFoodWrapper = styled.View`
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;

  background: ${({theme}) => theme.colors.brown};
  border-radius: 100px;
  border-width: 1px;
  border-color: yellow;

  align-items: center;
  justify-content: center;
`;

export const ImageFood = styled.Image`
  width: ${RFValue(125)}px;
  height: ${RFValue(125)}px;
  border-radius: 65px;
`;

export const LikeWrapper = styled(RectButton)`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  background-color: ${({theme}) => theme.colors.like};

  align-items: center;
  justify-content: center;

  border-radius: 30px;

  position: absolute;
  bottom: -28px;
  right: 20px;
  z-index: 3;
`;

export const Icon = styled(IconEntypoLib)``;

export const Content = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape_dark};
  padding: 0 20px 100px;
`;

export const FoodInfo = styled.View`
  margin-top: 25px;
`;

export const FoodMainInfo = styled.View`
  width: 100%;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  border-bottom-width: 0.5px;
  border-bottom-color: ${({theme}) => theme.colors.text_details};
  padding-bottom: 10px;
`;

export const FoodNameLocation = styled.View`
  justify-content: space-between;
`;

export const FoodName = styled.Text`
  font-size: ${RFValue(19)}px;
  font-family: ${({theme}) => theme.fonts.primary_regular};
  color: ${({theme}) => theme.colors.text};
`;

export const FoodLocationWrapper = styled.View`
  flex-direction: row;
`;

export const Location = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.primary_regular};
  color: ${({theme}) => theme.colors.text_details};
`;

export const Value = styled.Text`
  font-size: ${RFValue(28)}px;
  font-family: ${({theme}) => theme.fonts.primary_medium};
  color: ${({theme}) => theme.colors.like};
`;

export const RatingWrapper = styled.View`
  padding: 10px 0;
  flex-direction: row;
  justify-content: space-between;

  border-bottom-width: 0.5px;
  border-bottom-color: ${({theme}) => theme.colors.text_details};
`;

export const TitleRating = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.primary_regular};
  color: ${({theme}) => theme.colors.text};
`;

export const OverviewWrapper = styled.View`
  padding: 10px 0;
`;

export const OverviewTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.primary_regular};
  color: ${({theme}) => theme.colors.text};
`;

export const OverviewDescription = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.primary_regular};
  color: ${({theme}) => theme.colors.text_details};
  text-align: justify;
  margin-top: 15px;
`;
