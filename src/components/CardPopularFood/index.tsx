import {useNavigation} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {useTheme} from 'styled-components';
import {IPopularFood} from '../../@types';
import * as S from './styles';

type CardPopularFoodProps = {
  data: IPopularFood;
};

export const CardPopularFood: React.FC<CardPopularFoodProps> = ({data}) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const renderStarRating = () => {
    let stars: ReactNode[] = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= data.qtyStars) {
        stars.push(<S.IconFontAwesome name="star" key={String(i)} />);
      } else {
        stars.push(<S.IconFontAwesome name="star" noActive key={String(i)} />);
      }
    }

    return stars.map(item => item);
  };

  const handleFoodDetails = () => {
    navigation.navigate('FoodDetails');
  };

  return (
    <S.Container>
      <S.Content onPress={handleFoodDetails}>
        <S.BoxImage
          style={{
            shadowColor: theme.colors.text,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 5,
          }}>
          <S.FoodImage
            source={{
              uri: data.image,
            }}
          />
        </S.BoxImage>

        <S.BoxInfoFood>
          <S.NameFood>{data.name}</S.NameFood>
          <S.BoxLocInfo>
            <S.IconEntypo name="location-pin" />
            <S.Establishment>{data.location}</S.Establishment>
          </S.BoxLocInfo>
        </S.BoxInfoFood>
        <S.IconWrapper>{renderStarRating()}</S.IconWrapper>
        <S.ValueWrapper>
          <S.Value>R$ {data.value}</S.Value>
        </S.ValueWrapper>
      </S.Content>
    </S.Container>
  );
};
