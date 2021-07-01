import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Food.module.scss';

import { addFoodToCart } from '@store/actions/foodCartAction';
import itemsApi from '@api';
import FoodCategory from '@components/FoodCategory';
import FoodTime from '@components/FoodTime';
import FoodItem from '@components/FoodItem';

const Food = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState('');
  const categoryFilter = useSelector(({ filtersReducers }) => filtersReducers.category);
  const timeFilter = useSelector(({ filtersReducers }) => filtersReducers.time);

  const storeData = useSelector((store) => store.cartReducer);

  const handleAddItem = (item) => {
    dispatch(
      addFoodToCart([
        {
          id: item.id,
          name: item.desc,
          image: item.image,
          price: item.price,
        },
      ]),
    );
  };

  useEffect(() => {
    if (categoryFilter && categoryFilter !== 'Все') {
      const filterItems = itemsApi.filter((item) => item.type === categoryFilter);

      setItems(filterItems);
    } else if (timeFilter) {
      const filterItems = itemsApi.filter((item) => item.time === timeFilter);

      setItems(filterItems);
    } else {
      setItems(itemsApi);
    }
  }, [categoryFilter, timeFilter]);

  return (
    <div className={styles.food}>
      <div className={styles.food__filters}>
        <FoodCategory />
        <div className={styles.food__choose}>
          <span className={styles.food__choosing}>Выберите блюдо</span>
          <FoodTime />
        </div>
      </div>
      <div className={styles.food__items}>
        {items &&
          items.map((item, i) => (
            <FoodItem
              image={item.image}
              desc={item.desc}
              price={item.price}
              key={`${item}_${i}`}
              handleAddItem={() => handleAddItem(item)}
            />
          ))}
      </div>
    </div>
  );
};

Food.propTypes = {
  text: PropTypes.string,
};

export default Food;
