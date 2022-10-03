import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEntypoLib from 'react-native-vector-icons/Entypo';
import {RectButton} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

type IconNoActive = {
  noActive?: boolean;
};

export const Container = styled(Animated.View)`
  width: ${RFValue(220)}px;
  height: ${RFValue(280)}px;
  background-color: transparent;
  padding-top: 50px;
  margin-right: 20px;
`;

export const Content = styled(RectButton)`
  width: 100%;
  height: ${RFValue(220)}px;
  background-color: ${({theme}) => theme.colors.shape};
  align-items: center;
  border-radius: 20px;
  padding: 65px 20px 0px 20px;
`;

export const BoxImage = styled.View`
  width: ${RFValue(90)}px;
  height: ${RFValue(90)}px;
  border-radius: 90px;
  background-color: ${({theme}) => theme.colors.text_details};
  position: absolute;
  top: -40px;
  border-width: 1.5px;
  border-color: ${({theme}) => theme.colors.action_items};

  align-items: center;
  justify-content: center;
`;

export const FoodImage = styled.Image`
  width: ${RFValue(70)}px;
  height: ${RFValue(70)}px;
  border-radius: 70px;
`;

export const BoxInfoFood = styled.View`
  width: 100%;
`;

export const NameFood = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.primary_medium};
  color: ${({theme}) => theme.colors.text};
`;

export const IconWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 10px;
`;

export const IconFontAwesome = styled(Icon)<IconNoActive>`
  color: ${({theme, noActive}) =>
    !noActive ? theme.colors.action_items : theme.colors.text_details};
  font-size: ${RFValue(18)}px;
`;

export const IconEntypo = styled(IconEntypoLib)`
  color: ${({theme}) => theme.colors.action_items};
  font-size: ${RFValue(18)}px;
`;

export const Establishment = styled.Text`
  font-size: ${RFValue(11)}px;
  font-family: ${({theme}) => theme.fonts.primary_medium};
  color: ${({theme}) => theme.colors.text_details};
  margin-left: 4px;
`;

export const ValueWrapper = styled.View`
  width: 100%;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({theme}) => theme.fonts.primary_medium};
  color: ${({theme}) => theme.colors.action_items};
  align-items: center;
`;
