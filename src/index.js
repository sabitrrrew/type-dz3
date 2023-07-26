import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import NumbersList from './NumbersList';
import App from './App';

const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <NumbersList />
    </Provider>,
    document.getElementById('root')
);



