import PropTypes from 'prop-types';
import clsx from 'classnames';
import styles from './OrdersSubheader.module.scss';

const OrdersSubheader = () => {
  return (
    <div className={styles.subheader}>
      <span className={clsx(styles.subheader__item)}>Блюдо</span>
      <span className={clsx(styles.subheader__item, styles.subheader__qtty)}>Количество</span>
      <span className={clsx(styles.subheader__item, styles.subheader__price)}>Цена</span>
    </div>
  );
};

// OrdersSubheader.propTypes = {
//   text: PropTypes.string,
// };

export default OrdersSubheader;
