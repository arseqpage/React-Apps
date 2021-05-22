import { ADD_FOOD_TO_CART, REMOVE_FOOD_FROM_CART } from '@store/constants/actionTypes';

export const addFoodToCart = (food) => ({
  type: ADD_FOOD_TO_CART,
  payload: food,
});

export const removeFoodFromCart = (food) => ({
  type: REMOVE_FOOD_FROM_CART,
  payload: food,
});
