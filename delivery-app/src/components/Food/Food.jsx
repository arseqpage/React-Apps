import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Food.module.scss';

import itemsApi from '@api';
import FoodCategory from '@components/FoodCategory';
import FoodTime from '@components/FoodTime';
import FoodItem from '@components/FoodItem';

const Food = () => {
  const [items, setItems] = useState('');
  const categoryFilter = useSelector(({ filtersReducers }) => filtersReducers.category);
  const timeFilter = useSelector(({ filtersReducers }) => filtersReducers.time);

  useEffect(() => {
    if (categoryFilter && categoryFilter !== 'Все') {
      const filterItems = itemsApi.filter((item) => item.type === categoryFilter);

      setItems(filterItems);
    } else if (timeFilter) {
      console.log(timeFilter);
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
          <span className={styles.food__choosing}>Choose Dishes</span>
          <FoodTime />
        </div>
      </div>
      <div className={styles.food__items}>
        {items &&
          items.map((item, i) => (
            <FoodItem image={item.image} desc={item.desc} price={item.price} key={`${item}_${i}`} />
          ))}
      </div>
    </div>
  );
};

Food.propTypes = {
  text: PropTypes.string,
};

export default Food;
