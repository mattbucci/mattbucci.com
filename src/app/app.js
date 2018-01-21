import thunkMiddleware from 'redux-thunk';
import asyncDispatchMiddleware from '../_helpers/asyncDispatch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { Router, Route, hashHistory} from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware, push} from 'react-router-redux'

import rootReducer from './reducers'
import App from './containers/App';
import Blog from './containers/Blog';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        rootReducer,
        routing: routerReducer
    }),

    composeEnhancers(
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
            asyncDispatchMiddleware, // lets us dispatch from a reducer
        )
    ),
);


// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store)


render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="blog" component={Blog}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
)