import thunkMiddleware from 'redux-thunk';
import asyncDispatchMiddleware from '../_helpers/asyncDispatch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers'
import App from './containers/App.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
            asyncDispatchMiddleware, // lets us dispatch from a reducer
        )
    ),
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)