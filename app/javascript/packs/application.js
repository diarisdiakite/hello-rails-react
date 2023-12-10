// app/javascript/application.js
import 'webpacker-react';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../features/greetings/redux/store';
import App from '../features/greetings/components/App';

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
