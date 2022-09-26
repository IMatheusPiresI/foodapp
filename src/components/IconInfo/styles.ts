import styled from 'styled-components/native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {RFValue} from 'react-native-responsive-fontsize';

type TitleSizeColor = {
  fontsize: number;
  colorFont?: string;
};

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconFont = styled(IconFontAwesome)`
  margin-right: 5px;
  position: relative;
  bottom: 2px;
`;

export const IconEnt = styled(IconEntypo)`
  margin-right: 5px;
  position: relative;
  bottom: 2px;
`;

export const Title = styled.Text<TitleSizeColor>`
  font-size: ${({fontsize}) => RFValue(fontsize)}px;
  font-family: ${({theme}) => theme.fonts.primary_regular};
  color: ${({theme, colorFont}) => (colorFont ? colorFont : theme.colors.text)};
`;
