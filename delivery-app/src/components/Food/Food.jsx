import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Food.module.scss';

import itemsApi from '@api';
import FoodItem from '@components/FoodItem';

const Food = () => {
  const [items, setItems] = useState('');
  const categoryFilter = useSelector(({ filtersReducers }) => filtersReducers.category);

  useEffect(() => {
    setItems(itemsApi);

    if (categoryFilter && categoryFilter !== 'Все') {
      const filterItems = itemsApi.filter((item) => item.type === categoryFilter);

      setItems(filterItems);
    }
  }, [categoryFilter]);

  return (
    <div className={styles.food}>
      <div className={styles.food__filters}></div>
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
