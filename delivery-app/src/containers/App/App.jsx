import React from 'react';
import styles from './App.module.scss';

import Navbar from '@components/Navbar';

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
    </div>
  );
};

export default App;
