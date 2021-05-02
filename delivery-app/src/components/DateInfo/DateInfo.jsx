import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import styles from './DateInfo.module.scss';

const DateInfo = () => {
  const [date, setDate] = useState('');
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятника', 'Суббота'];
  const monthNames = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];

  useEffect(() => {
    const date = new Date();
    const day = date.getDay();
    const numDate = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const fullDate = `${days[day]}, ${numDate} ${monthNames[month]} ${year}`;

    setDate(fullDate);
  }, []);

  return <p className={styles.date}>{date}</p>;
};

Date.propTypes = {
  text: PropTypes.string,
};

export default DateInfo;
