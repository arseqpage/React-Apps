import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UiButton from '@components/UI/UiButton';

import styles from './OrderAdd.module.scss';

const OrderAdd = ({ countItem }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(countItem);
  }, []);

  const handleAddItem = () => {
    setCount(count + 1);
  };

  const handleRemoveItem = () => {
    if (count > 1) {
      setCount(count - 1);
    }

    return;
  };

  return (
    <>
      <div className={styles.container}>
        <UiButton type="minus" text="-" onClick={handleRemoveItem} />
        <div className={styles.counter}>{count}</div>
        <UiButton type="plus" text="+" onClick={handleAddItem} />
      </div>
    </>
  );
};

OrderAdd.propTypes = {
  count: PropTypes.number,
};

export default OrderAdd;
