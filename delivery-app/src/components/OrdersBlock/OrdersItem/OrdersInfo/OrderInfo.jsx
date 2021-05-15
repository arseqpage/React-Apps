import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'classnames';
import OrderAdd from '@components/OrdersBlock/OrdersItem/OrdersAdd';

import styles from './OrderInfo.module.scss';

const OrderInfo = ({ text, img, price, classes }) => {
  const [descr, setDescr] = useState();
  const textLimit = 20;

  useEffect(() => {
    if (text.length > textLimit) {
      const textShort = text.slice(0, textLimit);
      setDescr(textShort + '...');
    }
  }, []);

  return (
    <>
      <div className={clsx(styles.info, classes)}>
        <div className={styles.info__food}>
          <img className={styles.info__img} src={img} alt={text} />
          <div className={styles.info__text}>
            <h3 className={styles.info__name}>{descr}</h3>
            <span className={styles.info__price}>{price} ₽</span>
          </div>
        </div>
        <OrderAdd className={styles.info__add} countItem={1} />
        <div className={styles.info__summ}>44&nbsp;₽</div>
      </div>
    </>
  );
};

OrderInfo.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  classes: PropTypes.string,
};

export default OrderInfo;
