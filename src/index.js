
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import setupStore from './store';
import Main from './containers/Main';



const store = setupStore();


ReactDOM.render(
  <Provider store={store}>
    <Main  />
  </Provider>,
  document.querySelector('#root')
);


if(module.hot) {
  module.hot.accept();
}
