import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routesConfig from '@routes/routesConfig';

import styles from './App.module.scss';

import Navbar from '@components/Navbar';

const App = () => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Navbar />
        
        <div className={styles.wrapper}>
          <Switch>
            {routesConfig.map((route, index) => (
              <Route
                key={`${route}_${index}`}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
