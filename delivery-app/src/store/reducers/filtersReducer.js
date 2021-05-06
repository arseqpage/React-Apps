const initialState = {
  category: null,
  sortBy: {
    type: 'Завтрак',
  },
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
        sortBy: action.payload,
      };

    default:
      return state;
  }
};

export default filtersReducer;
