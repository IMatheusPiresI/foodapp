import React from 'react';
import {StyleSheet} from 'react-native';

import * as S from './styles';

import {useTheme} from 'styled-components';
import {CartFoodItems} from '../../@types';

import {useDispatch} from 'react-redux';
import {actionCreators} from '../../store/ducks/foodCart';

type CartListItemProps = {
  data: CartFoodItems;
};

export const CartListItem: React.FC<CartListItemProps> = ({data}) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleAddQuantityCartFood = () => {
    dispatch(actionCreators.addFoodOnCart(data));
  };

  const handleSubQuantityCartFood = () => {
    dispatch(actionCreators.subFoodOnCart(data));
  };

  return (
    <S.Container style={styles.shadow}>
      <S.ImageNameWrapper>
        <S.ImageWrapper>
          <S.ImageFood source={{uri: data.food.image}} resizeMode="contain" />
        </S.ImageWrapper>
        <S.NameFood>{data.food.name}</S.NameFood>
      </S.ImageNameWrapper>
      <S.QuantityFoodWrapper>
        <S.BoxQuantityFood>
          <S.ButtonChangeQuantity onPress={handleSubQuantityCartFood}>
            <S.Icon
              name={'chevron-left'}
              size={12}
              color={theme.colors.text_details}
            />
          </S.ButtonChangeQuantity>
          <S.Quantity>{data.food.quantity}</S.Quantity>
          <S.ButtonChangeQuantity onPress={handleAddQuantityCartFood}>
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

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
