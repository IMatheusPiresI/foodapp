import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import * as S from './styles';
import {ICategoryFood, IPizzaMenu} from '../../@types';
import {CardPopularFood} from '../../components/CardPopularFood';
import {BackButton} from '../../components/BackButton';
import {ListRenderItemInfo} from 'react-native';

type FoodCategoryParamsProps = {
  category: ICategoryFood;
};

export const FoodCategory: React.FC = () => {
  const route = useRoute();

  const params: FoodCategoryParamsProps =
    route.params as FoodCategoryParamsProps;

  function renderItem({item}: ListRenderItemInfo<IPizzaMenu>) {
    return <CardPopularFood data={item} />;
  }
  return (
    <S.Container>
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
        <S.FoodCategoryImage
          source={{uri: params.category.image}}
          resizeMode="contain"
        />
        <S.TitleCategory>{params.category.name}</S.TitleCategory>
      </S.Header>
      <S.Content>
        {params.category.menu.map(menu => (
          <S.SectionFood key={menu.id}>
            <S.TitleSectionFood>{menu.title}</S.TitleSectionFood>
            <S.ListFoodCategory
              data={menu.pizzas}
              keyExtractor={item => item.image}
              renderItem={renderItem}
              horizontal
            />
          </S.SectionFood>
        ))}
      </S.Content>
    </S.Container>
  );
};
