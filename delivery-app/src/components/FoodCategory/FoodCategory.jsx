import { useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'classnames';
import PropTypes, { func } from 'prop-types';

import { setCategory } from '@store/actions/filtersAction';
import styles from './FoodCategory.module.scss';

const FoodCategory = () => {
  const dispatch = useDispatch();

  const [activeBtn, setActiveBtn] = useState(0);
  const categories = ['Все', 'Холодное', 'Горячее', 'Супы', 'Десерты'];

  const changeByCategory = (category, i) => {
    setActiveBtn(i);

    dispatch(setCategory(category));
  };

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
                onClick={() => changeByCategory(category, i)}>
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
