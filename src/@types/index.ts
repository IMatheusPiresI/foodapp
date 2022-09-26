export type IPizzaMenu = {
  id: string;
  name: string;
  description: string;
  image: string;
  qtyStars: number;
  value: number;
  location: string;
  distance_shop: string;
  preparation_time: string;
};

export type IMenuCategoryFood = {
  id: string;
  title: string;
  pizzas: IPizzaMenu[];
};

export type ICategoryFood = {
  id: string;
  name: string;
  image: string;
  menu: IMenuCategoryFood[];
};

export type IPopularFood = IPizzaMenu;
