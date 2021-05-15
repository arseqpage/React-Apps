import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'classnames';

import styles from './UiButton.module.scss';

const UiButton = ({ type, text, onClick, classes }) => {
  const [btnStyle, setBtnStyle] = useState('payment');
  const [activeBtn, setActiveBtn] = useState(false);

  useEffect(() => {
    if (type === 'order') {
      setBtnStyle('order');
    } else if (type === 'border_sm') {
      setBtnStyle('border_sm');
    } else if (type === 'border_lg') {
      setBtnStyle('border_lg');
    } else if (type === 'payment') {
      setBtnStyle('payment');
    } else if (type === 'changes') {
      setBtnStyle('changes');
    } else if (type === 'plus') {
      setBtnStyle('plus');
    } else if (type === 'minus') {
      setBtnStyle('minus');
    }
  }, []);

  return (
    <>
      <button
        className={clsx(styles.button, styles[btnStyle], activeBtn && styles.active, classes)}
        onClick={onClick}>
        {text}
      </button>
    </>
  );
};

UiButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};

export default UiButton;
