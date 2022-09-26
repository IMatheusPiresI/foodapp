import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

import {FlatList} from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(225)}px;
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

export const FoodCategoryImage = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
`;

export const TitleCategory = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({theme}) => theme.fonts.primary_medium};
  color: ${({theme}) => theme.colors.like};
  letter-spacing: 4px;
`;

export const Content = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape_dark};
`;

export const SectionFood = styled.View`
  padding: 25px 0px;
`;

export const TitleSectionFood = styled.Text`
  margin-left: 25px;
  font-size: ${RFValue(22)}px;
  font-family: ${({theme}) => theme.fonts.primary_medium};
  color: ${({theme}) => theme.colors.like};
`;

export const ListFoodCategory = styled(FlatList).attrs({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 20,
  },
})`
  margin-top: 5px;
` as unknown as typeof FlatList;
