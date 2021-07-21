import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-calendar/dist/Calendar.css';
import {Provider} from "react-redux"
import store from './store'

ReactDOM.render(
<Provider store={store}>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
</Provider>,
  document.getElementById('root')
);

