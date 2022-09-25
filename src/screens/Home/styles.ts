import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(45)}px;
  background-color: ${({theme}) => theme.colors.header_home};
  padding: ${getStatusBarHeight() + 25}px 0px;
`;

export const Greeting = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
`;

export const ImagePeaple = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  margin-right: 20px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.primary_regular};
`;

export const SearchBox = styled.View`
  width: 100%;
  padding: 0 20px;
`;

export const SerchBoxWrapper = styled.View`
  margin-top: 20px;

  flex-direction: row;
  justify-content: space-between;
`;

export const InputWrapper = styled.View`
  width: 75%;
  justify-content: center;
`;

export const SearchIcon = styled(Icon)`
  position: absolute;
  left: 20px;
`;

export const InputText = styled.TextInput`
  background-color: ${({theme}) => theme.colors.shape};
  padding: 0px 20px 0px 45px;
  border-radius: 10px;
  font-size: ${RFValue(15)}px;
  width: 100%;
  height: ${RFValue(50)}px;
`;

export const BoxIcon = styled.View`
  background-color: ${({theme}) => theme.colors.shape};
  width: 18%;
  height: ${RFValue(50)}px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const IconFilter = styled(Icon)`
  transform: rotate(90deg);
`;

export const FoodTypes = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingRight: 20,
  },
})`
  width: 100%;
  height: ${RFValue(120)}px;
  position: absolute;
  margin-top: ${RFPercentage(34)}px;
  padding: 0 20px;
  z-index: 2;
`;

export const LoadingWrapper = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  height: ${RFValue(120)}px;
  position: absolute;
  margin-top: ${RFPercentage(34)}px;
  padding: 0 20px;
  z-index: 2;
`;

export const LoadingWrapperPopular = styled.View`
  align-items: center;
  justify-content: center;
  height: ${RFPercentage(45)}px;
`;

export const Content = styled.View`
  width: 100%;
  padding: 65px 0px 0px;
  flex: 1;
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const PopularFoodTitle = styled.Text`
  font-size: ${RFValue(21)}px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.primary_medium};
`;

export const ButtonViewPopularFoods = styled(TouchableOpacity)``;

export const TextViewPopularFood = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.view};
  font-family: ${({theme}) => theme.fonts.primary_medium};
`;

export const BoxPopularFood = styled.View`
  justify-content: flex-end;
  padding-bottom: ${getBottomSpace() + 20}px;
  margin-top: auto;
`;

export const ScrollPopularFood = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    paddingRight: 20,
  },
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  padding: 0 20px;
  margin-top: auto;
`;
