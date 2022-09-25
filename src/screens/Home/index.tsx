import React, {useEffect, useState} from 'react';
import * as S from './styles';

import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components';

import {CardFoodTypes} from '../../components/CardFoodTypes';
import {CardPopularFood} from '../../components/CardPopularFood';
import {api} from '../../services/api';
import {ICategoryFood, IMenuCategoryFood, IPopularFood} from '../../@types';
import {Loading} from '../../components/Loading';
import {useNavigation} from '@react-navigation/native';

export const Home: React.FC = () => {
  const [foodCategories, setFoodCategories] = useState<ICategoryFood[]>([]);
  const [popularFoods, setPopularFoods] = useState<IPopularFood[]>([]);
  const [loadingFood, setLoadingFood] = useState<boolean>(true);
  const [loadingPopularFood, setLoadingPopularFood] = useState<boolean>(true);
  const theme = useTheme();
  const navigation = useNavigation();

  const loadCategoryFoods = async () => {
    try {
      const response = await api.get('/food_categories');
      const foodCategory: ICategoryFood[] = response.data;

      setFoodCategories(foodCategory);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingFood(false);
    }
  };

  const loadPopularFood = async () => {
    try {
      const response = await api.get('/popular_foods');
      const popularFood: IPopularFood[] = response.data;
      setPopularFoods(popularFood);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingPopularFood(false);
    }
  };

  const handleNavigate = (category: ICategoryFood) => {
    navigation.navigate('FoodCategory', {
      category,
    });
  };

  useEffect(() => {
    loadCategoryFoods();
    loadPopularFood();
  }, []);
  return (
    <S.Container>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor="transparent"
      />
      <S.Header>
        <S.Greeting>
          <S.ImagePeaple source={require('../../assets/images/peaple.png')} />
          <S.Title>How Hungry are You Today ?</S.Title>
        </S.Greeting>

        <S.SearchBox>
          <S.SerchBoxWrapper>
            <S.InputWrapper>
              <S.InputText placeholder="Search Foods Items" />
              <S.SearchIcon
                name="search"
                size={20}
                color={theme.colors.text_details}
              />
            </S.InputWrapper>

            <S.BoxIcon>
              <S.IconFilter
                name="sliders"
                size={20}
                color={theme.colors.text_details}
              />
            </S.BoxIcon>
          </S.SerchBoxWrapper>
        </S.SearchBox>
        {loadingFood ? (
          <S.LoadingWrapper>
            <Loading />
          </S.LoadingWrapper>
        ) : (
          <S.FoodTypes horizontal showsHorizontalScrollIndicator={false}>
            {foodCategories.map(category => (
              <CardFoodTypes
                key={category.id}
                name={category.name}
                imageUrl={category.image}
                onPress={() => handleNavigate(category)}
              />
            ))}
          </S.FoodTypes>
        )}
      </S.Header>

      <S.Content>
        <S.TitleWrapper>
          <S.PopularFoodTitle>Popular Foods</S.PopularFoodTitle>
          <S.ButtonViewPopularFoods>
            <S.TextViewPopularFood>View All</S.TextViewPopularFood>
          </S.ButtonViewPopularFoods>
        </S.TitleWrapper>
        {loadingPopularFood ? (
          <S.LoadingWrapperPopular>
            <Loading color={theme.colors.like} />
          </S.LoadingWrapperPopular>
        ) : (
          <S.BoxPopularFood>
            <S.ScrollPopularFood>
              {popularFoods.map(food => (
                <CardPopularFood key={food.id} data={food} />
              ))}
            </S.ScrollPopularFood>
          </S.BoxPopularFood>
        )}
      </S.Content>
    </S.Container>
  );
};
