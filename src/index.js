import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TranslationProvider from 'admin-on-rest/lib/i18n/TranslationProvider';
import { IntlProvider } from 'react-intl';
import { ConnectedRouter } from 'react-router-redux';
import { CookiesProvider } from 'react-cookie';
import createHistory from 'history/createHashHistory';

import 'typeface-roboto';
import 'typeface-francois-one';
import 'typeface-lobster';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const messages = {};
const locale = 'en';
const routerHistory = createHistory();

const target = document.querySelector('#root');


ReactDOM.render(
  <Provider store={store}>
    <TranslationProvider messages={messages}>
      <IntlProvider locale={locale}>
        <ConnectedRouter history={routerHistory}>
          <CookiesProvider>
            <App />
          </CookiesProvider>
        </ConnectedRouter>
      </IntlProvider>
    </TranslationProvider>
  </Provider>
  ,
  target);
registerServiceWorker();
