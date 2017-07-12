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

const NavBar = ({ goBackPressed, handleOptionPressed, option, border, children, }) => {
  const { navBar, navBarNoBorder, } = styles;

  return (
    <View style = { border ? navBar : navBarNoBorder }>
      <TouchableHighlight
        underlayColor="#ccc"
        style={styles.leftMenu}
        onPress={ goBackPressed }
      >
        <Image
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          source={require('../../../../assets/imgs/iconChevronLeftS.png')}
        />
      </TouchableHighlight>
      <Text
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}
      >
        { children }
      </Text>
      <TouchableHighlight
        underlayColor="#ccc"
        style={ styles.rightMenu }
        onPress={ handleOptionPressed }>
        { option }
      </TouchableHighlight>
    </View>
  );
};

export default NavBar;
