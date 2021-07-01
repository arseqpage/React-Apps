import PropTypes from 'prop-types';
import styles from './FoodItem.module.scss';

import UiAddItem from '@ui/UiAddItem';

const FoodItem = ({ image, desc, price, handleAddItem }) => {

  
  return (
    <div className={styles.item}>
      <img className={styles.item__img} src={image} alt={desc} />

      <div className={styles.item__text}>
        <p className={styles.item__desc}>{desc}</p>
        <span className={styles.item__price}>{price} ₽</span>
      </div>
      <UiAddItem onClick={handleAddItem} text={'Добавить'} classes={styles.item__btn} />
    </div>
  );
};

FoodItem.propTypes = {
  image: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.string,
  handleAddItem: PropTypes.func,
};

export default FoodItem;
