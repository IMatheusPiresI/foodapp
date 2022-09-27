import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {CartFoodItems} from '../../@types';
import {CartListItem} from '../../components/CartListItem';
import {api} from '../../services/api';
import * as S from './styles';

export const CartFoods: React.FC = () => {
  const [foodsCart, setFoodsCart] = useState<CartFoodItems[]>([]);
  const userId = 'staticid-1323sdsan213n21o321oasd1';

  const loadFoodsCart = async () => {
    const response = await api.get(`/cart_foods_byuser`);
    setFoodsCart(response.data);
  };

  useFocusEffect(
    useCallback(() => {
      loadFoodsCart();
    }, [userId]),
  );
  return (
    <S.Container>
      <S.Header>
        <S.TitleHeader>Welcome to your food cart</S.TitleHeader>
        <S.FoodCartImage source={require('../../assets/images/foodcart.png')} />
      </S.Header>
      <S.Content>
        <S.ListFoodCart
          data={foodsCart}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CartListItem data={item} />}
        />
      </S.Content>
    </S.Container>
  );
};
