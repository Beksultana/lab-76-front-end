import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import messageReducer from './store/reducers/messagesReducer';
import * as serviceWorker from './serviceWorker';

import {Provider} from  'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from "redux-thunk";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(messageReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
