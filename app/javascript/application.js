// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"

// app/javascript/application.js
import 'webpacker-react';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './features/greetings/redux/store';
import App from './features/greetings/components/app';

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
