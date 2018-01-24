import thunkMiddleware from 'redux-thunk';
import asyncDispatchMiddleware from '../_helpers/asyncDispatch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import rootReducer from './reducers'
import App from './containers/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

const store = createStore(
    combineReducers({
        rootReducer,
        routing: routerReducer
    }),

    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            thunkMiddleware, // lets us dispatch() functions
            asyncDispatchMiddleware, // lets us dispatch from a reducer
        )
    ),
);



render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={App}></Route>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
)