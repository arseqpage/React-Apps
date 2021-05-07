import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { setSortBy } from '@store/actions/filtersAction';
import PropTypes from 'prop-types';
import clsx from 'classnames';

import styles from './FoodTime.module.scss';
import ArrowDown from './img/arrowDown.svg';

const FoodTime = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const typeFilters = ['Завтрак', 'Обед', 'Ужин'];
  const timeRef = useRef();

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  });

  const handleOutsideClick = (e) => {
    const path = e.path;

    if (path && !path.includes(timeRef.current)) {
      setShowFilters(false);
    }
  };

  const handleShowFilters = () => {
    setShowFilters(true);
  };

  const handleChooseType = (time, timeIndex) => {
    setType(timeIndex);
    dispatch(setSortBy(time));
    setShowFilters(false);
  };

  return (
    <>
      <div className={styles.time} ref={timeRef}>
        <div className={styles.time__value} onClick={handleShowFilters}>
          <img
            className={clsx(styles.time__arrow, showFilters && styles.show)}
            src={ArrowDown}
            alt="Show"
          />
          <span className={styles.time__text}>{typeFilters[type]}</span>
        </div>

        <ul className={clsx(styles.time__items, showFilters && styles.show)}>
          {typeFilters.map((time, i) => (
            <li className={styles.time__item} onClick={() => handleChooseType(time, i)} key={time}>
              {time}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

FoodTime.propTypes = {
  text: PropTypes.string,
};

export default FoodTime;
