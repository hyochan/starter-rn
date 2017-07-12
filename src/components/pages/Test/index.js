'use strict';

import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';

import styles from './styles';

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  goBack() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
       <View style={ styles.header }>
          <TouchableHighlight
            activeOpacity={ 0.75 }
            underlayColor="transparent"
            onPress={ () => this.goBack() }
          >
            <Image source={ require('../../../../assets/imgs/close.png') } />
          </TouchableHighlight>
        </View>
        <View style={ styles.content }>
          <ScrollView style={{ alignSelf: 'stretch', }}>
            <Text style={{ textAlign: 'center', }}>There is no page. Check the router.</Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}
