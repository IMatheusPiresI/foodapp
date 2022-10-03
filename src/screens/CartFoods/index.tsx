import React, {useCallback, useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';

import * as S from './styles';

import {CartFoodItems, ReducerCartState} from '../../@types';
import {CartListItem} from '../../components/CartListItem';

import {useSelector} from 'react-redux';
import {EmptyCart} from '../../components/EmptyCart';
import {useFocusEffect} from '@react-navigation/native';

export const CartFoods: React.FC = () => {
  const foodCart: CartFoodItems[] = useSelector(
    (state: ReducerCartState) => state.foodCartReducer.foodCart,
  );
  const [value, setValue] = useState<number>(0);

  const getTotalValue = () => {
    let value = 0;

    for (let food of foodCart) {
      value += food.food.value * food.food.quantity;
    }

    setValue(value);
  };

  useFocusEffect(
    useCallback(() => {
      getTotalValue();
    }, [foodCart]),
  );

  return (
    <S.Container>
      <S.Header>
        <S.TitleHeader>Welcome to your food cart</S.TitleHeader>
        <S.FoodCartImage source={require('../../assets/images/foodcart.png')} />
      </S.Header>
      <S.Content>
        <S.TotalWrapper style={styles.shadow}>
          <S.TitleValue>Total</S.TitleValue>
          <S.Value>$ {value}</S.Value>
        </S.TotalWrapper>
        <S.ListFoodCart
          data={foodCart}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CartListItem data={item} />}
          ListEmptyComponent={() => <EmptyCart />}
        />
      </S.Content>
    </S.Container>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
