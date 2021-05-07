const initialState = {
  category: null,
  time: 'Завтрак',
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY_BY':
      return {
        ...state,
        category: action.payload,
      };
    case 'SET_SORT_BY':
      return {
        ...state,
        time: action.payload,
      };

    default:
      return state;
  }
};

export default filtersReducer;
