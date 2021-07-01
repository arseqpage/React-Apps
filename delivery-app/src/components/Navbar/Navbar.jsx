import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Logo from '@ui/UiLogo';

import clsx from 'classnames';
import styles from './Navbar.module.scss';

import { ReactComponent as HomeIcon } from './img/Home.svg';
import { ReactComponent as DiscountIcon } from './img/Discount.svg';
import { ReactComponent as MessagesIcon } from './img/Messages.svg';
import { ReactComponent as NotificationsIcon } from './img/Notifications.svg';
import { ReactComponent as SettingsIcon } from './img/Settings.svg';
import { ReactComponent as SignOutIcon } from './img/SignOut.svg';
import { ReactComponent as StatisticsIcon } from './img/Statistics.svg';

const Navbar = () => {
  const path = useLocation().pathname;

  const homePath = path === '/';
  const discountsPath = path === '/discounts';
  const messagesPath = path === '/messages';
  const notificationsPath = path === '/notifications';
  const settingsPath = path === '/settings';
  const signoutPath = path === '/signout';
  const statisticsPath = path === '/statistics';

  return (
    <>
      <ul className={styles.nav}>
        <li className={styles.nav__item}>
          <Logo />
        </li>

        <li className={clsx(styles.nav__item, homePath && styles.active)}>
          <NavLink to={'/'} exact className={styles.nav__btn} activeClassName={styles.btn__active}>
            <HomeIcon className={clsx(styles.icon, homePath && styles.icon__active)} />
          </NavLink>
        </li>

        <li className={clsx(styles.nav__item, discountsPath && styles.active)}>
          <NavLink
            to={'/discounts'}
            className={styles.nav__btn}
            activeClassName={styles.btn__active}>
            <DiscountIcon className={clsx(styles.icon, discountsPath && styles.icon__active)} />
          </NavLink>
        </li>

        <li className={clsx(styles.nav__item, statisticsPath && styles.active)}>
          <NavLink
            to={'/statistics'}
            className={styles.nav__btn}
            activeClassName={styles.btn__active}>
            <StatisticsIcon className={clsx(styles.icon, statisticsPath && styles.icon__active)} />
          </NavLink>
        </li>

        <li className={clsx(styles.nav__item, messagesPath && styles.active)}>
          <NavLink
            to={'/messages'}
            className={styles.nav__btn}
            activeClassName={styles.btn__active}>
            <MessagesIcon className={clsx(styles.icon, messagesPath && styles.icon__active)} />
          </NavLink>
        </li>

        <li className={clsx(styles.nav__item, notificationsPath && styles.active)}>
          <NavLink
            to={'/notifications'}
            className={styles.nav__btn}
            activeClassName={styles.btn__active}>
            <NotificationsIcon
              className={clsx(styles.icon, notificationsPath && styles.icon__active)}
            />
          </NavLink>
        </li>

        <li className={clsx(styles.nav__item, settingsPath && styles.active)}>
          <NavLink
            to={'/settings'}
            className={styles.nav__btn}
            activeClassName={styles.btn__active}>
            <SettingsIcon className={clsx(styles.icon, settingsPath && styles.icon__active)} />
          </NavLink>
        </li>

        <li className={clsx(styles.nav__item, signoutPath && styles.active)}>
          <NavLink to={'/signout'} className={styles.nav__btn} activeClassName={styles.btn__active}>
            <SignOutIcon className={clsx(styles.icon, signoutPath && styles.icon__active)} />
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
