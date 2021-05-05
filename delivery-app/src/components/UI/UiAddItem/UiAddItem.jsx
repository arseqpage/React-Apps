import PropTypes from 'prop-types';
import styles from './UiAddItem.module.scss';

const UiAddItem = ({ text, onClick, disabled, classes }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {text}
    </button>
  );
};

UiAddItem.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  classes: PropTypes.string,
};

export default UiAddItem;
