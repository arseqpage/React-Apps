import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import routesConfig from '@routes/routesConfig';
import Navbar from '@components/Navbar';
import store from '@store/store';
import styles from './App.module.scss';

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
