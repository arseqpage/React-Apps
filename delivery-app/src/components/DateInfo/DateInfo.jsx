import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import styles from './DateInfo.module.scss';

const DateInfo = () => {
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [actualDate, setActualDate] = useState();

  const date = new Date();
  const day = date.getDay();
  const numDate = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();

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
    const interval = setInterval(() => {
      setMinutes(new Date().getMinutes());

      setActualDate(`${days[day]}, ${numDate} ${monthNames[month]} ${year}, ${hours}:${minutes}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!actualDate) {
    return <p className={styles.date}>Получаем дату...</p>;
  }

  return (
    <>
      <p className={styles.date}>{actualDate}</p>
    </>
  );
};

Date.propTypes = {
  text: PropTypes.string,
};

export default DateInfo;
