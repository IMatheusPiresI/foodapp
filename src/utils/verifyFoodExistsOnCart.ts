import {CartFoodItems} from '../@types';

export function verifyFoodExistsOnCart(
  foodsOnCart: CartFoodItems[],
  currentFoodAdd: CartFoodItems,
) {
  const exists = foodsOnCart.filter(
    foodCart => foodCart.id === currentFoodAdd.id,
  );

  if (exists.length > 0) {
    return true;
  } else {
    return false;
  }
}
