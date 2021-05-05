// import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';

import Header from '@components/Header';
import Food from '@components/Food';

const Homepage = () => {
  return (
    <div className="wrapper">
      <Header />
      <Food />
    </div>
  );
};

// Homepage.propTypes = {
//   text: PropTypes.string,
// };

export default Homepage;
