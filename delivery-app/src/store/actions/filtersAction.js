import { SET_SORT_BY, SET_CATEGORY_BY } from '@store/constants/actionTypes';

export const setSortBy = (time) => ({
  type: 'SET_SORT_BY',
  payload: time,
});

export const setCategory = (category) => ({
  type: 'SET_CATEGORY_BY',
  payload: category,
});
