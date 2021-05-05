import PropTypes from 'prop-types';
import styles from './Header.module.scss';

import Name from '@components/Name';
import DateInfo from '@components/DateInfo';
import Search from '@components/Search';
import FoodCategory from '@components/FoodCategory';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__name}>
        <div className={styles.header__left}>
          <Name />
          <DateInfo />
        </div>
        <div className={styles.header__right}>
          <Search />
        </div>
      </div>

      <FoodCategory />
    </header>
  );
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
