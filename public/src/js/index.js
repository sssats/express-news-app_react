import '../scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import combineReducers from 'redux';
import Provider from 'react-redux';

import AppRouter from './components/router.jsx'

ReactDOM.render(
  <main>
    <AppRouter/>
  </main>,
  document.getElementById('root')
);
