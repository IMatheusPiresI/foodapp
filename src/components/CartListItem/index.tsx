import React from 'react';
import {useTheme} from 'styled-components';
import {CartFoodItems} from '../../@types';
import * as S from './styles';

type CartListItemProps = {
  data: CartFoodItems;
};

export const CartListItem: React.FC<CartListItemProps> = ({data}) => {
  const theme = useTheme();
  return (
    <S.Container>
      <S.ImageNameWrapper>
        <S.ImageWrapper>
          <S.ImageFood source={{uri: data.food.image}} resizeMode="contain" />
        </S.ImageWrapper>
        <S.NameFood>{data.food.name}</S.NameFood>
      </S.ImageNameWrapper>
      <S.QuantityFoodWrapper>
        <S.BoxQuantityFood>
          <S.ButtonChangeQuantity>
            <S.Icon
              name={'chevron-left'}
              size={12}
              color={theme.colors.text_details}
            />
          </S.ButtonChangeQuantity>
          <S.Quantity>{data.food.quantity}</S.Quantity>
          <S.ButtonChangeQuantity>
            <S.Icon
              name={'chevron-right'}
              size={12}
              color={theme.colors.text_details}
            />
          </S.ButtonChangeQuantity>
        </S.BoxQuantityFood>
      </S.QuantityFoodWrapper>
      <S.ValueWrapper>
        <S.Value>R$ {data.food.value * data.food.quantity}</S.Value>
      </S.ValueWrapper>
    </S.Container>
  );
};
