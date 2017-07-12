import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import {
  Text,
  View,
  TouchableOpacity,
  BackHandler,
  StatusBar,
} from 'react-native';

import stylesVar from './stylesVar';

import { StackNavigator } from 'react-navigation';
import TestPage from './components/pages/Test';
import FirstPage from './components/pages/First';
import SecondPage from './components/pages/Second';

import reducers from './reducers';
const store = createStore(
  combineReducers({
    ...reducers,
  })
);

const startPage = 'Test';

class App extends Component {
  constructor (props) {
    super(props);
    this.navigator = null;
  }
  render () {
    const Navigator = StackNavigator({
      Test: {
        screen: TestPage,
        path: 'test',
      },
      First: {
        screen: FirstPage,
        path: 'first',
      },
      Second: {
        screen: SecondPage,
        path: 'second',
      },

    }, {
      initialRouteName: 'Test',
      header: null,
      headerMode: 'none',
      navigationOptions: {
        header: null,
      },
    });
    return (
      <Provider store={ store }>
        <View style={{ flex: 1, }}>
          <StatusBar
            barStyle="dark-content"
          />
          <Navigator/>
        </View>
      </Provider>
    );
  }
}

module.exports = { App, };
