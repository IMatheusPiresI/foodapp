import {useRoute} from '@react-navigation/native';
import React from 'react';
import {useTheme} from 'styled-components';
import {IPopularFood} from '../../@types';
import {BackButton} from '../../components/BackButton';
import {ButtonAddCart} from '../../components/ButtonAddCart';
import {IconInfo} from '../../components/IconInfo';
import * as S from './styles';

type FoodDetailsParamsProps = {
  food: IPopularFood;
};

export const FoodDetails: React.FC = () => {
  const route = useRoute();
  const theme = useTheme();

  const params: FoodDetailsParamsProps = route.params as FoodDetailsParamsProps;
  return (
    <S.Container>
      <S.ContainerWrapper>
        <S.Header
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.52,
            shadowRadius: 5.46,

            elevation: 9,
            zIndex: 2,
          }}>
          <S.BackWrapper>
            <BackButton />
          </S.BackWrapper>

          <S.ImageFoodWrapper
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.52,
              shadowRadius: 5.46,

              elevation: 7,
              zIndex: 12,
            }}>
            <S.ImageFood
              source={{uri: params.food.image}}
              resizeMode="contain"
            />
          </S.ImageFoodWrapper>

          <S.LikeWrapper>
            <S.Icon name="heart" color={theme.colors.shape} size={28} />
          </S.LikeWrapper>
        </S.Header>
        <S.Content>
          <S.FoodInfo>
            <S.FoodMainInfo>
              <S.FoodNameLocation>
                <S.FoodName>{params.food.name}</S.FoodName>
                <S.FoodLocationWrapper>
                  <IconInfo
                    name="location-pin"
                    size={18}
                    color={theme.colors.action_items}
                    colorFont={theme.colors.text_details}
                    title={params.food.location}
                    fontsize={13}
                    location
                  />
                </S.FoodLocationWrapper>
              </S.FoodNameLocation>
              <S.Value>R$ {params.food.value}</S.Value>
            </S.FoodMainInfo>
            <S.RatingWrapper>
              <IconInfo
                name="star"
                size={18}
                color={theme.colors.action_items}
                title={params.food.qtyStars}
                fontsize={14}
              />

              <IconInfo
                name="hourglass-half"
                size={18}
                color={theme.colors.action_items}
                title={params.food.preparation_time}
                fontsize={14}
              />

              <IconInfo
                name="send"
                size={18}
                color={theme.colors.action_items}
                title={params.food.distance_shop}
                fontsize={14}
              />
            </S.RatingWrapper>
            <S.OverviewWrapper>
              <S.OverviewTitle>Overview</S.OverviewTitle>
              <S.OverviewDescription>
                {params.food.description}
              </S.OverviewDescription>
            </S.OverviewWrapper>
          </S.FoodInfo>
        </S.Content>
      </S.ContainerWrapper>
      <ButtonAddCart />
    </S.Container>
  );
};
