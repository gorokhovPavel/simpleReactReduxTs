import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.unregister();
