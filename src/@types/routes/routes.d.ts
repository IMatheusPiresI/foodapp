import {ICategoryFood, IPopularFood} from './../index';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Welcome: undefined;
      Home: undefined;
      FoodCategory: {category: ICategoryFood};
      FoodDetails: {food: IPopularFood};
    }
  }
}
