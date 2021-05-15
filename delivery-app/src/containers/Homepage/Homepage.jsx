// import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';

import Header from '@components/Header';
import Food from '@components/Food';
import Orders from '@components/OrdersBlock/Orders';

const Homepage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.homepage__info}>
        <Header />
        <Food />
      </div>
      <div className={styles.homepage__purchase}>
        <Orders />
      </div>
    </div>
  );
};

// Homepage.propTypes = {
//   text: PropTypes.string,
// };

export default Homepage;
