import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Routes } from './routes';
import GlobalStyle, { theme } from './components/GlobalStyle';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';
import firebase from 'firebase/app';
import { firebaseConfig } from './config/firebase';
import { rootReducer } from './store/reducers/root';
import { NavBar } from './components/NavBar';

const store = createStore(
  rootReducer,
  compose(
    reduxFirestore(firebaseConfig),
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);

const reactReduxFirebaseProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <>
    <GlobalStyle />
    <React.StrictMode>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <NavBar />
              <Switch>
                <Route exact path={Routes.HOME} component={Home} />
                <Route component={NotFound} />
              </Switch>
            </BrowserRouter>
          </ThemeProvider>
        </ReactReduxFirebaseProvider>
      </Provider>
    </React.StrictMode>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
