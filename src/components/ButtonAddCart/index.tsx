import React, {useState} from 'react';
import {useTheme} from 'styled-components';
import {api} from '../../services/api';
import * as S from './styles';

export const ButtonAddCart: React.FC = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState<boolean>(false);

  const handleAddFoodCart = async () => {
    console.log('cliquei para add ao cart');
    const response = await api.get('/cart_foods_byuser');

    setLoading(true);
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
