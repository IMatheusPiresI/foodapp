import React, {useState} from 'react';
import {useTheme} from 'styled-components';
import {CartFoodItems, IPizzaMenu, QuantityPizza} from '../../@types';
import {api} from '../../services/api';
import * as S from './styles';

type ButtonAddCartProps = {
  food: IPizzaMenu;
};

export const ButtonAddCart: React.FC<ButtonAddCartProps> = ({food}) => {
  const theme = useTheme();
  const [loading, setLoading] = useState<boolean>(false);

  const userId = 'staticid-1323sdsan213n21o321oasd1';

  const handleAddFoodCart = async () => {
    console.log('cliquei para add ao cart');
    setLoading(true);

    try {
      const response = await api.get('/cart_foods_byuser');
      const userCartFoods: CartFoodItems[] = response.data;

      const foodExists: CartFoodItems[] = userCartFoods.filter(
        (foodAdd, index) => foodAdd.food.id === food.id,
      );

      if (foodExists.length > 0) {
        const addOneMoreQuantityFood: QuantityPizza[] = foodExists.map(
          (foodsAdd, index) => {
            return {
              ...food,
              quantity: foodsAdd.food.quantity + 1,
            };
          },
        );

        await api.put(`/cart_foods_byuser/${food.id}`, {
          id: food.id,
          userId,
          food: {
            ...addOneMoreQuantityFood[0],
          },
        });
      } else {
        await api.post(`/cart_foods_byuser`, {
          id: food.id,
          userId,
          food: {
            ...food,
            quantity: 1,
          },
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

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
        </S.IconWrapper>
        <S.TitleWrapper>
          <S.TitleButton>Swipe to add on Cart</S.TitleButton>
        </S.TitleWrapper>
      </S.ContentWrapper>
    </S.ContainerButtonCartWrapper>
  );
};
