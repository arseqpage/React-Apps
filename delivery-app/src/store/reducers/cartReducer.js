import { getLocalStorage } from '@utils/localStorage';
import { ADD_FOOD_TO_CART, REMOVE_FOOD_FROM_CART } from '@store/constants/actionTypes';

const initialState = getLocalStorage('store');
console.log(initialState);

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FOOD_TO_CART:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default cartReducer;
