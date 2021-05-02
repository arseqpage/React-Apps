import styles from './Logo.module.scss';

import logoSvg from './img/Logo.svg';

const Logo = () => {
  return (
    <>
      <div className={styles.logo}>
        <img className={styles.logo__icon} src={logoSvg} alt="Delivery" />
        <div className="logo__block"></div>
      </div>
    </>
  );
};

export default Logo;
