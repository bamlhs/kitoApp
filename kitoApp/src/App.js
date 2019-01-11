import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Tab from './navigation/TabNav';
import { combineReducers } from 'redux';
import foods from './redux/reducers/FoodReducer';

export default class App extends Component {

  render() {
    const NewApp = createAppContainer(Tab);
    const reducers = combineReducers({
      foods: foods,
    });
    const enhancers = [];
    const middlewares = [];
    enhancers.push(applyMiddleware(...middlewares));
    enhancers.push(applyMiddleware(thunk));
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return (
      <Provider store={createStore(reducers, {}, composeEnhancers(...enhancers))}>
        <NewApp />
      </Provider>
    );
  }
}