import {FlatList} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {CartFoodItems} from '../../@types';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(45)}px;
  background-color: ${({theme}) => theme.colors.header_home};
  padding: ${getStatusBarHeight() + 25}px 0px 0px;
  align-items: center;
  justify-content: space-around;
`;

export const TitleHeader = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({theme}) => theme.fonts.primary_regular};
  color: ${({theme}) => theme.colors.text};
`;

export const FoodCartImage = styled.Image`
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  padding: 20px;
`;

export const ListFoodCart = styled(FlatList).attrs({
  showsHorizontalScrollIndicator: false,
})`` as unknown as typeof FlatList<CartFoodItems>;
