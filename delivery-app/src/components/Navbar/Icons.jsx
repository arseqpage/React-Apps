import { ReactComponent as Home } from './img/Home.svg';
import { ReactComponent as Discount } from './img/Discount.svg';
import { ReactComponent as Messages } from './img/Messages.svg';
import { ReactComponent as Notifications } from './img/Notifications.svg';
import { ReactComponent as Settings } from './img/Settings.svg';
import { ReactComponent as SignOut } from './img/SignOut.svg';
import { ReactComponent as Statistics } from './img/Statistics.svg';

const Icons = ({ classes }) => {
  return (
    <>
      <Home className={classes} />
      <Discount className={classes} />
      <Messages className={classes} />
      <Notifications className={classes} />
      <Settings className={classes} />
      <SignOut className={classes} />
      <Statistics className={classes} />
    </>
  );
};

export default Icons;
