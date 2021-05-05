import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Food.module.scss';

import itemsApi from '@api';
import FoodItem from '@components/FoodItem';

const Food = () => {
  const [items, setItems] = useState('');

  useEffect(() => {
    setItems(itemsApi);
  }, []);

  return (
    <div className={styles.food}>
      <div className={styles.food__filters}></div>
      <div className={styles.food__items}>
        {items &&
          items.map((item) => <FoodItem image={item.image} desc={item.desc} price={item.price} />)}
      </div>
    </div>
  );
};

Food.propTypes = {
  text: PropTypes.string,
};

export default Food;
