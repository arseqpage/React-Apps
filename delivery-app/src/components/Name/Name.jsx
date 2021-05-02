import PropTypes from 'prop-types';
import styles from './Name.module.scss';

const Name = () => {
  return <h1 className={styles.name}>React restaurant</h1>;
};

Name.propTypes = {
  text: PropTypes.string,
};

export default Name;
