import { combineReducers } from 'redux';
import filtersReducers from './filtersReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  filtersReducers,
  cartReducer,
});
