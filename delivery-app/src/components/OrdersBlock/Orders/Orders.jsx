// import PropTypes from 'prop-types';
import UiButton from '@components/UI/UiButton';
import OrdersInfo from '@components/OrdersBlock/OrdersItem/OrdersInfo';
import OrderSubheader from '@components/OrdersBlock/OrdersSubheader';

import items from '@api';
import styles from './Orders.module.scss';

const Orders = ({ orderNumber = 44 }) => {
  console.log(items);

  const handleChooseType = () => {
    console.log('1');
  };

  const handleChooseWith = () => {
    console.log('С собой');
  };

  const handleChooseDelivery = () => {
    console.log('Заказать');
  };

  return (
    <>
      <div className={styles.order}>
        <div className={styles.order__header}>
          <h2 className={styles.order__title}>Заказ #{orderNumber}</h2>
          <div className={styles.order__filter}>
            <UiButton
              type="order"
              text="С собой"
              onClick={handleChooseWith}
              classes={styles.order__btn}
            />
            <UiButton
              type="order"
              text="Доставка на дом"
              onClick={handleChooseDelivery}
              classes={styles.order__btn}
            />
          </div>
        </div>
        <OrderSubheader />
        <div className={styles.order__items}>
          {items &&
            items.map((item, i) => (
              <OrdersInfo
                classes={styles.order__item}
                text={item.desc}
                img={item.image}
                price={+item.price}
                key={`${item.price}_${i}`}
              />
            ))}
        </div>
      </div>
    </>
  );
};

// Orders.propTypes = {
//   text: PropTypes.string,
// };

export default Orders;
