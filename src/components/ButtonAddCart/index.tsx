import React, {useEffect, useState} from 'react';
import * as S from './styles';

import {useTheme} from 'styled-components';
import {CartFoodItems, IPizzaMenu, ReducerCartState} from '../../@types';

import {useSelector, useDispatch} from 'react-redux';
import {actionCreators} from '../../store/ducks/foodCart';

type ButtonAddCartProps = {
  food: IPizzaMenu;
};

export const ButtonAddCart: React.FC<ButtonAddCartProps> = ({food}) => {
  const userId = 'staticid-1323sdsan213n21o321oasd1';

  const [loading, setLoading] = useState<boolean>(false);
  const theme = useTheme();
  const dispatch = useDispatch();
  const foodCart: CartFoodItems[] = useSelector(
    (state: ReducerCartState) => state.foodCartReducer.foodCart,
  );

  const handleAddFoodCart = () => {
    setLoading(true);

    try {
      dispatch(
        actionCreators.addFoodOnCart({
          id: food.id,
          userId: userId,
          food: {
            ...food,
            quantity: 1,
          },
        }),
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const getQuantityFoodOnCart = () => {
    const quantityFood = foodCart
      .filter(foods => foods.id === food.id)
      .map(currentFood => currentFood.food.quantity);

    const currentFoodQty = quantityFood[0];

    if (currentFoodQty > 0) return currentFoodQty;

    return '';
  };

  useEffect(() => {
    getQuantityFoodOnCart();
  }, [foodCart]);

  return (
    <S.ContainerButtonCartWrapper
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
      <S.ContentWrapper onPress={handleAddFoodCart} enabled={!loading}>
        <S.IconWrapper>
          <S.IconFontAwesome
            name="shopping-bag"
            size={28}
            color={theme.colors.shape}
          />
          <S.CountCartFoodQuantity>
            {getQuantityFoodOnCart()}
          </S.CountCartFoodQuantity>
        </S.IconWrapper>
        <S.TitleWrapper>
          <S.TitleButton>Swipe to add on Cart</S.TitleButton>
        </S.TitleWrapper>
      </S.ContentWrapper>
    </S.ContainerButtonCartWrapper>
  );
};
