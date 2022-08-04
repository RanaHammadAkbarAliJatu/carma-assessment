import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
