import { useState } from 'react';
import clsx from 'classnames';

import PropTypes from 'prop-types';
import styles from './FoodCategory.module.scss';

const FoodCategory = () => {
  const [activeBtn, setActiveBtn] = useState(0);
  const categories = ['Холодное', 'Горячее', 'Супы', 'Десерты'];

  function handleActiveBtn(i) {
    setActiveBtn(i);
  }

  return (
    <>
      <ul className={styles.categories}>
        {categories &&
          categories.map((category, i) => (
            <li
              className={clsx(
                styles.categories__item,
                activeBtn === i && styles.categories__item_active,
              )}
              key={`${category}_${i}`}>
              <button
                className={clsx(
                  styles.categories__btn,
                  activeBtn === i && styles.categories__btn_active,
                )}
                id={i}
                onClick={() => handleActiveBtn(i)}>
                {category}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

// FoodCategory.propTypes = {
//   text: PropTypes.string,
// };

export default FoodCategory;
