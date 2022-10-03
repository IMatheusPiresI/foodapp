import {CartFoodItems, ReducerCartAction} from '../../@types';
import {verifyFoodExistsOnCart} from '../../utils/verifyFoodExistsOnCart';

const actionTypes = {
  ADD_FOOD_CART: 'ADD_FOOD_CART',
  SUB_FOOD_CART: 'SUB_FOOD_CART',
};

const initialState = {
  foodCart: [] as CartFoodItems[],
};

export function foodCartReducer(
  state = initialState,
  action: ReducerCartAction,
) {
  const foodExists = verifyFoodExistsOnCart(state.foodCart, action.payload);
  switch (action.type) {
    case actionTypes.ADD_FOOD_CART:
      if (foodExists) {
        const newState: CartFoodItems[] = state.foodCart.map(foodItem => {
          if (foodItem.id === action.payload.id) {
            foodItem.food['quantity'] += 1;
            return foodItem;
          } else {
            return foodItem;
          }
        });

        return {
          foodCart: [...newState],
        };
      } else {
        return {
          foodCart: [...state.foodCart, {...action.payload}],
        };
      }
    case actionTypes.SUB_FOOD_CART:
      const newState: CartFoodItems[] = state.foodCart
        .map(foodItem => {
          if (foodItem.id === action.payload.id) {
            foodItem.food['quantity'] -= 1;

            return foodItem;
          } else {
            return foodItem;
          }
        })
        .filter(foodItem => foodItem.food.quantity !== 0);

      return {
        foodCart: [...newState],
      };

    default:
      return state;
  }
}

export const actionCreators = {
  addFoodOnCart: (payload: CartFoodItems) => {
    return {
      type: actionTypes.ADD_FOOD_CART,
      payload,
    };
  },

  subFoodOnCart: (payload: CartFoodItems) => {
    return {
      type: actionTypes.SUB_FOOD_CART,
      payload,
    };
  },
};
