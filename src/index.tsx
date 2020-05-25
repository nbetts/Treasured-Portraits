import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Routes } from './routes';
import GlobalStyle from './components/GlobalStyle';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

ReactDOM.render(
  <>
    <GlobalStyle />
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route exact path={Routes.HOME} component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
