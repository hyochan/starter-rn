'use strict';

import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  Dimensions,
  View,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native';

import styles from './styles';
import { ICON_BACK, ICON_SETTING, } from '../../../global/images';

const NavBar = ({ showBack, showOption, handleBack, handleOption, children, }) => {
  return (
    <View style = { styles.container }>
      {
        showBack
        ? <TouchableHighlight
            underlayColor="#ccc"
            style={styles.leftMenu}
            onPress={ handleBack }
          >
            <Image
              style={styles.center}
              source={ ICON_BACK }
            />
          </TouchableHighlight>
        : <View style={styles.leftMenu}/>
      }
      <Text style={[ styles.center, styles.title, ]}>{ children }</Text>
      {
        showOption
        ? <TouchableHighlight
            underlayColor="#ccc"
            style={styles.rightMenu}
            onPress={ handleOption }
          >
            <Image
              style={styles.center}
              source={ ICON_SETTING }
            />
          </TouchableHighlight>
        : <View style={styles.rightMenu}/>
      }
    </View>
  );
};

export default NavBar;
