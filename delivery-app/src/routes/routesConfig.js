import HomePage from '@containers/Homepage';
import Discounts from '@containers/Discounts';
import Messages from '@containers/Messages';
import Notifications from '@containers/Notifications';
import Settings from '@containers/Settings';
import SignOut from '@containers/SignOut';
import Statistics from '@containers/Statistics';

const routesConfig = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/discounts',
    exact: true,
    component: Discounts,
  },
  {
    path: '/messages',
    exact: true,
    component: Messages,
  },
  {
    path: '/notifications',
    exact: true,
    component: Notifications,
  },
  {
    path: '/settings',
    exact: true,
    component: Settings,
  },
  {
    path: '/signout',
    exact: true,
    component: SignOut,
  },
  {
    path: '/statistics',
    exact: true,
    component: Statistics,
  },
];

export default routesConfig;
